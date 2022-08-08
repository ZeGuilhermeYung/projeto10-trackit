import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../services/APIs.js";
import logo from "../assets/img/trackit-logo.png";
import { AuthScreen, Button, Loading } from "./common";

export default function Login () {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const authData = JSON.parse(localStorage.getItem("userData"));
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  function handleInput (event) {
    setForm( {...form, [event.target.name]: event.target.value} );
  }

  function handleSubmit (event) {
    event.preventDefault();
    setDisabled(true);

    loginUser(form)
      .catch((error) => {
        alert(error.message);
        setDisabled(false);
      })
      .then((userInfo) => {
        localStorage.clear();
        const userAuth = JSON.stringify({ token: userInfo.data.token, name: userInfo.data.name, image: userInfo.data.image });
        localStorage.setItem("userData", userAuth);
        navigate("/hoje");
      });
  }

  return (
    <>
      {authData ? <Navigate to="/hoje" />
        : <AuthScreen>
            <img src={logo} alt="logo do Track It" />
            <form onSubmit={handleSubmit} >
              <input type="email" name="email" onChange={handleInput} value={form.email} placeholder="email" disabled={disabled} required />
              <input type="password" name="password" onChange={handleInput} value={form.password} placeholder="senha" disabled={disabled} required />
              {disabled ? <Loading size="large" /> : <Button title="Entrar" size="large" disabled={disabled} />}
            </form>
            <Link to="/cadastro" >
              <h6>Não tem uma conta? Cadastre-se!</h6>
            </Link> 
          </AuthScreen>}
    </>
  );
}

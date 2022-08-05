import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../services/APIs.js";
import logo from "../assets/img/trackit-logo.png";
import { AuthScreen, Button } from "./common";

export default function Login () {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  //const authData = JSON.parse(localStorage.getItem("userData"));
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

    postLogin(form)
      .catch((error) => {
        alert(error.message);
        setDisabled(false);
      })
      .then((answer) => {
        localStorage.clear();
        const token = answer.data.token;
        const name = answer.data.name;
        const image = answer.data.image;
        const userAuth = JSON.stringify({ token: token, name: name, image: image });
        localStorage.setItem("userData", userAuth);
        navigate("/hoje");
      });
  }

  return (
    <AuthScreen >
      <img src={logo} alt="logo do Track It" />
      <form onSubmit={handleSubmit} >
        <input type="email" name="email" onChange={handleInput} value={form.email} placeholder="email" disabled={disabled} required />
        <input type="password" name="password" onChange={handleInput} value={form.password} placeholder="senha" disabled={disabled} required />
        <Button title="Entrar" size="large" />
      </form>
      <Link to="/cadastro" >
        <h6>Não tem uma conta? Cadastre-se!</h6>
      </Link> 
      
    </AuthScreen>
  );
}

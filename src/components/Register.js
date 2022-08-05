import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postRegister } from "../services/APIs.js";
import logo from "../assets/img/trackit-logo.png";
import { AuthScreen, Button } from "./common";

export default function Register () {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: ""
  });

  function handleInput(event) {
    setForm( {...form, [event.target.name]: event.target.value} );
  }

  function handleSubmit (event) {
    event.preventDefault();
    setDisabled(true);
    postRegister(form)
      .catch((error) => {
        alert(error.message);
        setDisabled(false);
      })
      .then(() => {
        navigate("/");
      });
  }

  return (
    <AuthScreen >
      <img src={logo} alt="logo do Track It" />
      <form onSubmit={handleSubmit} >
        <input type="email" name="email" onChange={handleInput} value={form.email} placeholder="email" disabled={disabled} required />
        <input type="password" name="password" onChange={handleInput} value={form.password} placeholder="senha" disabled={disabled} required />
        <input type="text" name="name" onChange={handleInput} value={form.name} placeholder="nome" disabled={disabled} required />
        <input type="url" name="image" onChange={handleInput} value={form.image} placeholder="foto" disabled={disabled} />
        <Button title="Cadastro" size="large" />
      </form>
      <Link to="/" >
        <h6>Já tem uma conta? Faça login!</h6>
      </Link>
    </AuthScreen>
  );
}
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { postLogin } from "../services/APIs.js";
import logo from "../assets/img/trackit-logo.png";
import AuthScreen from "./common/AuthScreen.js";
import Button from "./common/Button.js";


export default function Login () {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  function handleForm(event) {
    setForm( {...form, [event.target.name]: event.target.value} );
    console.log(form);
  }

  return (
    <AuthScreen >
      <img src={logo} alt="logo do Track It" />
      <form action="">
        <input type="email" name="email" onChange={handleForm} value={form.email} placeholder="email" />
        <input type="password" name="password" onChange={handleForm} value={form.password} placeholder="senha" />
        <Button title="Entrar" size="large" />
      </form>
      <Link to="/cadastro" >
        <h6>Não tem uma conta? Cadastre-se!</h6>
      </Link> 
      
    </AuthScreen>
  );
}

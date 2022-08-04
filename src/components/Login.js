import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { postLogin } from "../services/APIs.js";
import logo from "../assets/img/trackit-logo.png"
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
      </form>
      <Link to="/cadastro" >
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link> 
      <Button title="Entrar" size="large" />
    </AuthScreen>
  );
}
const AuthScreen = styled.main`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
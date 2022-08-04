import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/trackit-logo.png"
import Button from "./common/Button";


export default function Register () {
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
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
        <input type="text" name="name" onChange={handleForm} value={form.name} placeholder="nome" />
        <input type="url" name="image" onChange={handleForm} value={form.image} placeholder="foto" />
      </form>
      <Link to="/" >
        <p>Já tem uma conta? Faça login!</p>
      </Link>
      <Button title="Cadastro" size="large" />
    </AuthScreen>
  );
}

const AuthScreen = styled.main`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
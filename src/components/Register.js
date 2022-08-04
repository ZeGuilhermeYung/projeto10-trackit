import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/trackit-logo.png";
import AuthScreen from "./common/AuthScreen.js";
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
        <Button title="Cadastro" size="large" />
      </form>
      <Link to="/" >
        <h6>Já tem uma conta? Faça login!</h6>
      </Link>
    </AuthScreen>
  );
}
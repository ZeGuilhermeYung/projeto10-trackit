import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/APIs.js";
import logo from "../assets/img/trackit-logo.png";
import { AuthScreen, Button, Input, Loading } from "./common";

export default function Register () {
  const navigate = useNavigate();
  const userImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/768px-User-avatar.svg.png";
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
    const objectaux = {...form};
    if (form.image.length === 0) { 
      objectaux.image = userImage;
      setForm(objectaux);
    }
    event.preventDefault();
    setDisabled(true);
    registerUser(objectaux)
      .catch((error) => {
        alert(error.message);
        setDisabled(false);
      })
      .then(() => {
        navigate("/");
      });
  }

  return (
    <AuthScreen>
      <img src={logo} alt="logo do Track It" />
      <form onSubmit={handleSubmit} >
        <Input type="email" name="email" onChange={handleInput} value={form.email} placeholder="email" disabled={disabled} />
        <Input type="password" name="password" onChange={handleInput} value={form.password} placeholder="senha" disabled={disabled} />
        <Input type="text" name="name" onChange={handleInput} value={form.name} placeholder="nome" disabled={disabled} />
        <Input type="url" name="image" onChange={handleInput} value={form.image} placeholder="foto" disabled={disabled} />
        {disabled ? <Loading size="large" /> : <Button title="Cadastro" size="large" disabled={disabled} />}
      </form>
      <Link to="/" >
        <h6>Já tem uma conta? Faça login!</h6>
      </Link>
    </AuthScreen>
  );
}
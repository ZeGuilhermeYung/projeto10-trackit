import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Login from "./Login";
import Register from "./Register";
import Today from "./common/Today";

export default function App () {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter >
        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/hoje" element={<Today />} />
          {/* <Route path="/habitos" element={<Habits />} />
          <Route path="/historico" element={<History />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
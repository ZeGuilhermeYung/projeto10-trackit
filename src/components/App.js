import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Login from "./Login";
import PrivatePage from "./PrivatePages/PrivatePage";
import Register from "./Register";
import Today from "./Today";
import Habits from "./Habits/Habits";

export default function App () {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter >
        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route
            path="/hoje"
            element={
              <PrivatePage>
                <Today />
              </PrivatePage>
            } />
          <Route
            path="/habitos"
            element={
              <PrivatePage>
                <Habits />
              </PrivatePage>
            } />
          {/* <Route path="/historico" element={<History />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
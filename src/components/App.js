import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import UserContext from "../context/UserContext";
import Login from "./Login";
import PrivatePage from "./private/PrivatePage";
import Register from "./Register";
import Today from "./Today/Today";
import Habits from "./Habits/Habits";
import History from "./History";

export default function App () {
  const [progressHabits, setProgressHabits] = useState(0);
  
  return (
    <>
      <GlobalStyle />
      <BrowserRouter >
        <UserContext.Provider value={{ progressHabits, setProgressHabits }}>
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
              <Route
              path="/historico"
              element={
                <PrivatePage>
                  <History />
                </PrivatePage>
              } />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
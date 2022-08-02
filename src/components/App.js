import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";

export default function App () {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter >
      <Header />
        <Routes >
          {/* <Route path="/" element={< />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
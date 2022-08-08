import { Navigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

export default function PrivatePage({ children }) {
  const authData = JSON.parse(localStorage.getItem("userData"));

  if (authData) {
    return (
      <Private>
        <Header name={authData.name} image={authData.image} />
          {children}
        <Footer />
      </Private>
    )
  } else {
    return <Navigate to="/" />
  }
}

const Private = styled.section`
> section{
  margin: 98px 18px 111px 18px;
}
main > div {
  width: 100%;
  height: 94px;
  background-color: #FFFFFF;
  padding: 13px 13px 13px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
main > div > div {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
main ul {
  display: flex;
}
`;
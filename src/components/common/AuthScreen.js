import styled from "styled-components";

export default function AuthScreen ( {children} ) {
  return (
    <Main>
      {children}
    </Main>
  );
}

const Main = styled.main`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
img {
  width: 180px;
  height: 178px;
  margin-top: 68px;
}
form {
  width: 100%;
  padding: 33px 36px 25px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
input {
  width: 100%;
  height: 45px;
  font-size: 20px;
  line-height: 25px;
  background-color: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  padding-left: 11px;
  margin-bottom: 6px;
  box-sizing: border-box;
}
input:focus-visible {
 outline: none;
}
input::placeholder {
  font-size: 20px;
  line-height: 25px;
  color: #DBDBDB;
}
h6 {
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #52B6FF;
}
`;
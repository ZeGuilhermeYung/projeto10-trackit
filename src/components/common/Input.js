import styled from "styled-components";

export default function Input ( {type, name, onChange, value, placeholder, disabled} ) {
  return (
    <>
      {type === "url" ? 
      <Wrapper type={type} name={name} onChange={onChange} value={value} placeholder={placeholder} disabled={disabled} />
      : 
      <Wrapper type={type} name={name} onChange={onChange} value={value} placeholder={placeholder} disabled={disabled} required />
      }  
    </>
  );
}

const Wrapper = styled.input`
width: 100%;
height: 45px;
font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
color: #666666;
background-color: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
padding-left: 11px;
margin-bottom: 6px;
box-sizing: border-box;

:focus-visible {
 outline: none;
}
::placeholder, :-webkit-autofill {
  font-family: 'Lexend Deca', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #DBDBDB;
}
:-webkit-autofill {
  background-color: #52B6FF;
  opacity: 0.7;
}
:disabled {
  color: #AFAFAF;
  background-color: #F2F2F2;
}`;
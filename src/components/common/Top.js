import styled from "styled-components";

export default function Top () {
  const authData = JSON.parse(localStorage.getItem("userData"));

  return (
    <Header>
      <h1>TrackIt</h1>
      <div>
        <h6>Olá,<br/>{authData.name}!</h6>
        <img src={authData.image} alt="" />
      </div>
    </Header>
  );
}

const Header = styled.header`
width: 100%;
height: 70px;
background-color: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
padding: 10px 18px;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
left: 0px;
top: 0px;
z-index: 5;
box-sizing: border-box;

div {
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div img {
  width: 51px;
  height: 51px;
  border-radius: 50%;
  object-fit: cover;
}
div h6 {
  color: #FFFFFF;
  text-align: center;
}`;
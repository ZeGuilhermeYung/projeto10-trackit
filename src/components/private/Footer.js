import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from "../../context/UserContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

export default function Footer () {
  const { progressHabits } = useContext(UserContext);

  return (
    <Bottom>
      <Link to="/habitos" >
        <h3>Hábitos</h3>
      </Link>
      <Link to="/hoje" >
        <div>
          <CircularProgressbar
            value={progressHabits}
            text={"Hoje"}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              textColor: "#FFFFFF",
              pathColor: "#FFFFFF",
              trailColor: "transparent"
            })} />
        </div>
      </Link> 
      <Link to="/historico" >
        <h3>Histórico</h3>
      </Link> 
    </Bottom>
  );
}

const Bottom = styled.header`
width: 100%;
height: 70px;
background-color: #FFFFFF;
display: flex;
align-items: center;
justify-content: space-around;
position: fixed;
bottom: 0;
left: 0;
z-index: 5;

h3 {
  text-align: center;
  color: #52B6FF;
}
div {
  width: 91px;
  height: 91px;
  margin-bottom: 41px;
}
`;
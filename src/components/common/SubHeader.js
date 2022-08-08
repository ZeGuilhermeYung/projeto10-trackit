import { useContext } from "react";
import UserContext from "../../context/UserContext";
import styled from "styled-components";

export default function SubHeader ( {children} ) {
  const { progressHabits } = useContext(UserContext);

  return (
    <Top color={progressHabits} >
      {children}
    </Top>
  );
}

const Top = styled.header`
width: 100%;
.today-header {
  width: 100%;
  height: 107px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.today-header h3 {
  color: ${props => (
    (props.color > 0) ? "#8FC549"
    : "#BABABA")};
  }
.habits-header {
  width: 100%;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.history-header {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
}`;
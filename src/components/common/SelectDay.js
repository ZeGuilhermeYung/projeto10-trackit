import styled from "styled-components";

export default function SelectDay ( {name, selected, clickFunction} ) {
  return (
    <Day selected={selected} onClick={clickFunction} >
      <h4>{name}</h4>
    </Day>
  );
}

const Day = styled.li`
width: 30px;
height: 30px;
background-color: ${props => (
  props.selected ? "#CFCFCF"
  : "#FFFFFF")};
border: 1px solid ${props => (
  props.selected ? "#CFCFCF"
  : "#D5D5D5")};
border-radius: 5px;
margin-left: 4px;
display: flex;
align-items: center;
justify-content: center;
h4 {
  color: ${props => (
    props.selected ? "#FFFFFF"
    : "#DBDBDB")};;
}
`;
import styled from "styled-components";

export default function Icon ( {name, size, done, clickFunction} ) {
  return (
    <Wrapper size={size} done={done} >
      <ion-icon name={name} onClick={clickFunction} ></ion-icon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: auto;
height: auto;
cursor: pointer;
box-sizing: border-box;
ion-icon {
font-size: ${props => (
  (props.size === "large") ? "69px"
  : (props.size === "medium") ? "35px"
  : "15px"
)};
color: ${props => (
  ((props.size === "large" || props.size === "medium") && props.done) ? "#8FC549"
  : (props.size === "medium" && !props.done) ? "#E75766"
  : (props.size === "large" && !props.done) ? "#EBEBEB"
  : "#666666"
)};
}
`;
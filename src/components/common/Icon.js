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
  : "15px"
)};
color: ${props => (
  (props.size === "large" && props.done) ? "#8FC549"
  : (props.size === "large") ? "#EBEBEB"
  : "#666666"
)};
}
`;
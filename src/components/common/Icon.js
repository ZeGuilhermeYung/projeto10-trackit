import styled from "styled-components";

export default function Icon ( {name, size, clickFunction} ) {
  return (
    <Wrapper size={size} >
      <ion-icon name={name} onClick={clickFunction} ></ion-icon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: auto;
height: auto;
cursor: pointer;
ion-icon {
font-size: ${props => (
  (props.size === "large") ? "69px"
  : "15px"
)};
color: ${props => (
  (props.size === "large") ? "#EBEBEB"
  : "#666666"
)};
}
`;
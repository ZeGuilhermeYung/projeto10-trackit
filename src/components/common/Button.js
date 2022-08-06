import styled from "styled-components";

export default function Button ( {title, size, disabled} ) {
  return (
    <Wrapper title={title} size={size} disabled={disabled} >
      <p>{title}</p>
    </Wrapper>
  );
}

const Wrapper = styled.button`
width: ${props => (
  (props.size === "large") ? "100%"
  : (props.size === "small") ? "84px"
  : "40px")};
height: ${props => (
  (props.size === "large") ? "45px"
  : "35px")};
background-color: #52B6FF;
border-radius: 5px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;

p {
  font-size: ${props => (
  (props.size === "large") ? "21px"
  : (props.size === "small") ? "16px"
  : "27px")};
  line-height: ${props => (
  (props.size === "large") ? "26px"
  : (props.size === "small") ? "20px"
  : "34px")};
  text-align: center;
  color: #FFFFFF;
}`;
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function Loading ( {size} ) {
  return(
    <Wrapper size={size} >
      <ThreeDots
        width={size === "large" ? "51px" : "43px"}
        height={size === "large" ? "13px" : "11px"}
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: ${props => (
  (props.size === "large") ? "100%"
  : "84px"
  )};
height: ${props => (
  (props.size === "large") ? "45px"
  : "35px")};
background-color: #52B6FF;
opacity: 0.7;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
`;
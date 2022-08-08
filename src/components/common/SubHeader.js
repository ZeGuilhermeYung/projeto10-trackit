import styled from "styled-components";

export default function SubHeader ( {children} ) {
  return (
    <Top>
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
.habits-header {
  width: 100%;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
`;
import dayjs from "dayjs";
import styled from "styled-components";
import Top from "./Top";

export default function Today () {
  require("../../../node_modules/dayjs/locale/pt-br.js");
  return (
    <>
      <Top />
      <TodaySection>
        <header>
          <h2>{dayjs().locale("pt-br").format("dddd")}, {dayjs().format("DD/MM")}</h2>
        </header>
      </TodaySection>
    </>
  );
}
const TodaySection = styled.section`
margin-top: 70px;
`;
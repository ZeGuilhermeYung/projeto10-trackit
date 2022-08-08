import { checkHabit, uncheckHabit } from "../../services/APIs";
import { Icon } from "../common";
import styled from "styled-components";

export default function TodayHabit ( {habitId, name, done, currentSequence, highestSequence, setChangeChecked} ) {

  function checkDoneHabit () {
    !done ?  checkHabit(habitId)
    .catch((error) => {
      alert(error.message);
    })
    .then(() => {
      setChangeChecked(true);
    })
    : uncheckHabit(habitId)
    .catch((error) => {
        alert(error.message);
    })
    .then(() => {
      setChangeChecked(true);
    });
  }
  return (
    <Div id={habitId} actualDone={done} current={currentSequence} record={highestSequence} >
      <div>
        <h4>{name}</h4>
        <div>
          <h6 className="actual" >Sequência atual: <em>{
          currentSequence === 0 ? "Nenhum dia"
          : currentSequence} {
          currentSequence === 0 ? ""
          : currentSequence === 1 ? "dia"
          : "dias"}</em>
          </h6>
          <h6 className="record" >Seu recorde: <em>{
          highestSequence === 0 ? "Nenhum dia"
          : highestSequence} {
          highestSequence === 0 ? "" :
          highestSequence === 1 ? "dia"
          : "dias"}</em>
          </h6>
        </div>
      </div>
      <Icon name="checkbox" size="large" done={done} clickFunction={checkDoneHabit} />
    </Div>
  );
}

const Div = styled.div`
.actual em {
  color: ${props => (
    (props.actualDone) ? "#8FC549"
    : "#666666")};
}
.record em {
  color: ${props => (
    (props.current === props.record && props.record !== 0) ? "#8FC549"
    : "#666666")};
}
`;
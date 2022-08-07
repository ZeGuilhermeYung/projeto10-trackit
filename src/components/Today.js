import { useEffect, useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { getTodayHabits } from "../services/APIs";
import Top from "./common/Top";

function TodayHabit ( {id, name, done, currentSequence, highestSequence} ) {
  return (
    <div id={id} >
      <div>
        <h4>{name}</h4>
        <h6>Sequência atual: {currentSequence} dias</h6>
        <h6>Seu recorde: {highestSequence} dias</h6>
      </div>
      <ion-icon name="checkbox"></ion-icon>
    </div>
  );
}

export default function Today () {
  //require("dayjs/locale/pt-br");

  const [todayHabits, setTodayHabits] = useState([]);
  const [statusHabits, setStatusHabits] = useState("");
  const [doneHabits, setDoneHabits] = useState([]);
  const [progressHabits, setProgressHabits] = useState(0);

  useEffect(() => {
		getTodayHabits()
      .catch((error) => {
        alert(error.message);
      })
      .then((habits) => {
        console.log(habits);
        setTodayHabits(habits.data);
        setDoneHabits(habits.data.filter(habit => habit.done));
        setProgressHabits(Math.round((doneHabits.length / habits.data.length) * 100));
        doneHabits.length === 0 ?
          setStatusHabits("Nenhum hábito concluído ainda")
          : setStatusHabits(`${progressHabits}% dos hábitos concluídos`);
      });
      console.log(todayHabits);
    }, []);

  
  return (
    <>
      <Top />
      <TodaySection>
        <header>
          <h2>{dayjs().locale("pt-br").format("dddd")}, {dayjs().format("DD/MM")}</h2>
          <h3>{statusHabits}</h3>
        </header>
        <main>
        {todayHabits.length === 0 ? <h2>Carregando...</h2>
            : todayHabits.map((habit, index) =>
            <TodayHabit
              key={index}
              id={habit.id}
              name={habit.name}
              done={habit.done}
              currentSequence={habit.currentSequence}
              highestSequence={habit.highestSequence} />)}
        </main>
      </TodaySection>
    </>
  );
}
const TodaySection = styled.section`
margin: 98px 18px 111px 18px;
`;
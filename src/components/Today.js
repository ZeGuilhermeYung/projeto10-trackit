import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import dayjs from "dayjs";
import { checkHabit, getTodayHabits, uncheckHabit } from "../services/APIs";
import { Icon } from "./common";

function TodayHabit ( {habitId, name, done, currentSequence, highestSequence, setChangeChecked} ) {

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
    <div id={habitId} >
      <div>
        <h4>{name}</h4>
        <div>
          <h6>Sequência atual: {currentSequence} dias</h6>
          <h6>Seu recorde: {highestSequence} dias</h6>
        </div>
      </div>
      <Icon name="checkbox" size="large" done={done} clickFunction={checkDoneHabit} />
    </div>
  );
}

export default function Today () {
  require("dayjs/locale/pt-br");

  const [todayHabits, setTodayHabits] = useState([]);
  const [statusHabits, setStatusHabits] = useState("");
  const [doneHabits, setDoneHabits] = useState([]);
  const [changeChecked, setChangeChecked] = useState(false);
  const { progressHabits, setProgressHabits } = useContext(UserContext);

  useEffect(() => {
		getTodayHabits()
      .catch((error) => {
        alert(error.message);
      })
      .then((habits) => {
        setTodayHabits(habits.data);
        setDoneHabits(habits.data.filter(habit => habit.done));
        setChangeChecked(false);
        setProgressHabits(Math.round((habits.data.filter(habit => habit.done).length / habits.data.length) * 100));
        doneHabits.length === 0 ?
          setStatusHabits("Nenhum hábito concluído ainda")
          : setStatusHabits(`${progressHabits}% dos hábitos concluídos`);
      });
    }, [progressHabits, changeChecked]);

  
  return (
    <section>
      <header>
        <h2>{dayjs().locale("pt-br").format("dddd")}, {dayjs().format("DD/MM")}</h2>
        <h3>{statusHabits}</h3>
      </header>
      <main>
      {todayHabits.length === 0 ? <h2>Carregando...</h2>
          : todayHabits.map((habit, index) =>
          <TodayHabit
            key={index}
            habitId={habit.id}
            name={habit.name}
            done={habit.done}
            currentSequence={habit.currentSequence}
            highestSequence={habit.highestSequence}
            setChangeChecked={setChangeChecked} />)}
      </main>
    </section>
  );
}
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import dayjs from "dayjs";
import { getTodayHabits } from "../../services/APIs";
import TodayHabit from "./TodayHabit";
import { SubHeader } from "../common";

export default function Today () {

  const [todayHabits, setTodayHabits] = useState([]);
  const [statusHabits, setStatusHabits] = useState("");
  const [changeChecked, setChangeChecked] = useState(false);
  const { progressHabits, setProgressHabits } = useContext(UserContext);

  useEffect(() => {
		getTodayHabits()
      .catch((error) => {
        alert(error.message);
      })
      .then((habits) => {
        setTodayHabits(habits.data);
        setProgressHabits(Math.round((habits.data.filter(habit => habit.done).length / habits.data.length) * 100));
        habits.data.filter(habit => habit.done).length === 0 ?
          setStatusHabits("Nenhum hábito concluído ainda")
          : setStatusHabits(`${progressHabits}% dos hábitos concluídos`);
      });
    }, [progressHabits, changeChecked]);

  return (
    <section>
      <SubHeader>
        <div className="today-header">
          <h2>{dayjs().locale("pt-br").format("dddd")}, {dayjs().format("DD/MM")}</h2>
          <h3>{statusHabits}</h3>
        </div>
      </SubHeader>
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
            changeChecked={changeChecked} 
            setChangeChecked={setChangeChecked} />)}
      </main>
    </section>
  );
}
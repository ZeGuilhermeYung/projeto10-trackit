import { useEffect, useState } from "react";
import styled from "styled-components";
import { getHabits } from "../services/APIs";
import Top from "./common/Top";
import { Button } from "./common";

function Weekday ( {weekdayNum, name, weekdays, setWeekdays} ) {
  const [selected, setSelected] = useState(false);

  function checkWeekdays () {

    setSelected(!selected);
    const checkNum = weekdays.some(element => element === weekdayNum);
    if(checkNum) {
      const arrayaux = [...weekdays];
      for(let i = 0; i < weekdays.length; i++){
        if(weekdayNum === weekdays[i]){
          arrayaux.splice(i, 1);
          setWeekdays(arrayaux);
        }
      }
    } else {
      setWeekdays([...weekdays, weekdayNum].sort((a, b) => a - b));
    }
  }
  return (
    <li selected={selected} onClick={checkWeekdays} >
      {name}
    </li>
  );
}

function Habit ( {id, name, days, setAddHabit, setDeleteHabit} ) {
  return (
    <div id={id} >
      <div>
        <h4>{name}</h4>
      </div>
      <ion-icon name="checkbox"></ion-icon>
    </div>
  );
}

export default function Habits () {
  require("dayjs/locale/pt-br");

  const [allHabits, setAllHabits] = useState([]);
  const [addHabit, setAddHabit] = useState(false);
  const [deleteHabit, setDeleteHabit] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [newHabitName, setNewHabitName] = useState("");
  const [alertHabits, setAlertHabits] = useState("");
  const [weekdays, setWeekdays] = useState([]);

  useEffect(() => {
		getHabits()
      .catch((error) => {
        alert(error.message);
      })
      .then((habits) => {
        setAllHabits(habits.data);
        setDeleteHabit(false);
        habits.length === 0 ?
        setAlertHabits(<h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>)
          : setAlertHabits(null);
      });
    }, [addHabit, deleteHabit]);

  function newHabit () {
    setAddHabit(true);
  }

  return (
    <>
      <Top />
      <HabitsSection>
        <header>
          <h2>Meus hábitos</h2>
          <Button title="+" size="add" clickFunction={newHabit} disabled={disabled} />
        </header>
        <main>
          {addHabit ?
            <form>
              <input type="text" name="newHabit" onChange={(event) => {setNewHabitName(event.target.value)}} value={newHabitName} />
              <ul>
                {["D","S","T","Q","Q","S","S"].map((weekday, index) =>
                  <Weekday
                    key={index}
                    weekdayNum={index + 1}
                    name={weekday}
                    weekdays={weekdays}
                    setWeekdays={setWeekdays} />
                )}
              </ul>
              <h6>Cancelar</h6>
              <Button title="Salvar" size="small" disabled={disabled} />
            </form>
            : null}
          {alertHabits}
          {allHabits.length === 0 ? <h2>Carregando...</h2>
              : allHabits.map((habit, index) =>
              <Habit
                key={index}
                id={habit.id}
                name={habit.name}
                days={habit.days}
                setAddHabit={setAddHabit}
                setDeleteHabit={setDeleteHabit} />)}
        </main>
      </HabitsSection>
    </>
  );
}
const HabitsSection = styled.section`
margin: 98px 18px 111px 18px;
`;
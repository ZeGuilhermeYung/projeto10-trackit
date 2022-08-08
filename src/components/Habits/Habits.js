import { useEffect, useState } from "react";
import { getHabits, postNewHabit } from "../../services/APIs";
import { Button, Input, Loading, SelectDay } from "../common";
import Habit from "./Habit";

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
    <SelectDay selected={selected} name={name} clickFunction={checkWeekdays} />
  );
}

export default function Habits () {
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
        habits.data.length === 0 ?
        setAlertHabits(<h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>)
          : setAlertHabits(null);
      });
    }, [addHabit, deleteHabit]);

  function handleSubmit (event) {
    event.preventDefault();
    if (weekdays.length === 0) {
      alert("Selecione pelo menos um dia da semana");
    } else {
      setDisabled(true);
      const newHabit = {
        name: newHabitName,
        days: weekdays
      }
      postNewHabit(newHabit)
        .catch((error) => {
          alert(error.message);
          setDisabled(false);
        })
        .then(() => {
          setAddHabit(false);
          setDisabled(false);
          setNewHabitName("");
          setWeekdays([]);
        });
    }
  }

  return (
    <section>
      <header>
        <h2>Meus hábitos</h2>
        <Button title="+" size="add" clickFunction={() => {setAddHabit(true)}} disabled={disabled} />
      </header>
      <main>
        {addHabit ?
          <form onSubmit={handleSubmit} >
            <div>
              <Input type="text" name="newHabit" placeholder="nome do hábito" onChange={(event) => {setNewHabitName(event.target.value)}} value={newHabitName} disabled={disabled} />
              <ul>
                {["D","S","T","Q","Q","S","S"].map((weekday, index) =>
                  <Weekday
                    key={index}
                    weekdayNum={index}
                    name={weekday}
                    weekdays={weekdays}
                    setWeekdays={setWeekdays} />
                )}
              </ul>
            </div>
            <span>
              <h5 onClick={() => (setAddHabit(false))}>Cancelar</h5>
              {disabled ? <Loading size="small" /> : <Button title="Salvar" size="small" disabled={disabled} />}
            </span>
          </form>
          : null}
        {alertHabits}
        {allHabits.map((habit, index) =>
            <Habit
              key={index}
              habitId={habit.id}
              name={habit.name}
              days={habit.days}
              setDeleteHabit={setDeleteHabit} />)}
      </main>
    </section>
  );
}
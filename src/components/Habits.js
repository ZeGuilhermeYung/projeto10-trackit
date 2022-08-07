import { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteHabit, getHabits, postNewHabit } from "../services/APIs";
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
    <Li selected={selected} onClick={checkWeekdays} >
      {name}
    </Li>
  );
}
const Li = styled.li`
background-color: ${props => (
  props.selected ? "red"
  : "blue")};
`

function WeekdayHabit ( {name, selected} ) {
  return (
    <Li2 selected={selected} >
      {name}
    </Li2>
  );
}

const Li2 = styled.li`
background-color: ${props => (
  props.selected ? "red"
  : "blue")};
`

function Habit ( {habitId, name, days, setDeleteHabit} ) {
  const [weekdayHabit, setWeekdayHabit] = useState([
    {
      name: "D",
      selected:false
    },
    {
      name: "S",
      selected:false
    },
    {
      name: "T",
      selected:false
    },
    {
      name: "Q",
      selected:false
    },
    {
      name: "Q",
      selected:false
    },
    {
      name: "S",
      selected:false
    },
    {
      name: "S",
      selected:false
    }
  ]);

  useEffect(() => {
    const arrayaux = [...weekdayHabit];
    days.map(weekdayOrder => arrayaux[weekdayOrder].selected = true);
    setWeekdayHabit(arrayaux);
  },[])

  function confirmDeleteHabit() {
    if (window.confirm('Deseja excluir este hábito?')) {
      deleteHabit(habitId)
        .then(() => {
          setDeleteHabit(true);
        });
    }
  }

  return (
    <div id={habitId} >
      <div>
        <h4>{name}</h4>
      </div>
      <ul>
        {weekdayHabit.map((weekday, index) =>
          <WeekdayHabit
            key={index}
            selected={weekday.selected}
            name={weekday.name} />
         )}
      </ul>
      <ion-icon name="trash-outline" onClick={confirmDeleteHabit}></ion-icon>
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
  const [weekdays, setWeekdays] = useState([
 
  ]);

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

  function newHabit () {
    setAddHabit(true);
  }

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
    <>
      <Top />
      <HabitsSection>
        <header>
          <h2>Meus hábitos</h2>
          <Button title="+" size="add" clickFunction={newHabit} disabled={disabled} />
        </header>
        <main>
          {addHabit ?
            <form onSubmit={handleSubmit} >
              <input type="text" name="newHabit" onChange={(event) => {setNewHabitName(event.target.value)}} value={newHabitName} required/>
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
              <h6 onClick={() => (setAddHabit(false))}>Cancelar</h6>
              <Button title="Salvar" size="small" disabled={disabled} />
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
      </HabitsSection>
    </>
  );
}
const HabitsSection = styled.section`
margin: 98px 18px 111px 18px;
`;
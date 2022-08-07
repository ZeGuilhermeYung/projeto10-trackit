import { useEffect, useState } from "react";
import { deleteHabit } from "../../services/APIs";
import styled from "styled-components";

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

export default function Habit ( {habitId, name, days, setDeleteHabit} ) {
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
  },[days])

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
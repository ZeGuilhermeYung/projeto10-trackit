import { useEffect, useState } from "react";
import { deleteHabit } from "../../services/APIs";
import { Icon, SelectDay } from "../common";

function WeekdayHabit ( {name, selected} ) {
  return (
    <SelectDay selected={selected} name={name} />
  );
}

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
        <ul>
          {weekdayHabit.map((weekday, index) =>
            <WeekdayHabit
              key={index}
              selected={weekday.selected}
              name={weekday.name} />
          )}
        </ul>
      </div>
      <Icon name="trash-outline" size="small" clickFunction={confirmDeleteHabit} />
    </div>
  );
}
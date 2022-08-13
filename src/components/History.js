import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import { Icon, SubHeader } from "./common";
import { getHistory } from '../services/APIs';
import '../../node_modules/react-calendar/dist/Calendar.css';
import styled from 'styled-components';

export default function History () {
  const [value, setValue] = useState(new Date());
  const [daysStatus, setDaysStatus] = useState([]);
  const [daysHistory, setDaysHistory] = useState([]);
  const [dayHistory, setDayHistory] = useState([]);

  function tileClassName (date) {
    if (dayjs(date.date).format("DD/MM/YYYY") !== dayjs(new Date()).format("DD/MM/YYYY")) {
      const dayStatus = daysStatus.filter(
        day => day.day === dayjs(date.date).format("DD/MM/YYYY"))
        .map(day => day.dayDone === true ? "complete" : "incomplete");
      return dayStatus;
    }
  }

  function showDayHabits (date) {
    const day = daysHistory.filter(dayStatus => 
      dayStatus.day === dayjs(date).format("DD/MM/YYYY"));
      
    day.length === 0 ? setDayHistory([])
    : day.forEach(dayHabits => setDayHistory(dayHabits.habits));
  }

  useEffect(() => {
		getHistory()
      .catch((error) => {
        alert(error.message);
      })
      .then((history) => {
        setDaysHistory(history.data);
        const historyDays =
          history.data.map(dayHistory => dayHistory.day);

        const daysUndone =
          history.data.map(dayHistory => dayHistory.habits)
          .map(element => element.filter(value => !value.done));

        const arrayAux = [];
        daysUndone.forEach((element, i) => {
          element.length === 0 ?
          arrayAux.push({day: historyDays[i], dayDone: true})
          : arrayAux.push({day: historyDays[i], dayDone: false});
        });
        setDaysStatus(arrayAux);
      });
    }, []);

  return (
    <section>
      <SubHeader>
        <div className="history-header">
          <h2>Histórico</h2>
        </div>
      </SubHeader>
      <main>
        <Div className="calendar">
          <Calendar
          onChange={setValue}
          value={value}
          onClickDay={showDayHabits}
          showWeekNumbers={false}
          locale="pt-br"
          calendarType="US"
          tileClassName={tileClassName} />
        </Div>
        {dayHistory.length === 0 ? null
        :
        <>
          <SubHeader>
            <div className="history-header">
              <h2>Hábitos de {dayjs(value).locale("pt-br").format("dddd")} ({dayjs(value).format("DD/MM")})</h2>
            </div>
          </SubHeader>
          <DayStatus>
            {dayHistory.map((history, index) =>
              <li key={index}>
                <h4>{history.name}</h4>
                <Icon
                  name={history.done ? "checkmark-circle" : "close-circle"}
                  size="medium"
                  done={history.done ? true : false} />
              </li>)}
          </DayStatus>
        </>}
      </main>
    </section>
  );
}

const Div = styled.div`
font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
color: #666666;
.react-calendar {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
}
button.react-calendar__navigation__label {
  display: flex;
  justify-content: center;
  text-align: center;
}
.react-calendar__navigation {
  margin: 0;
}
.react-calendar__navigation span {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.react-calendar__navigation button {
  min-width: 44px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.react-calendar__viewContainer {
  height: auto;
  margin-bottom: 5px;
}
.react-calendar__month-view__weekdays__weekday {
  color: #000000;
}
.react-calendar__tile--now {
  color: #FFFFFF;
  background-color: #52B6FF;
}
.react-calendar__tile--now:hover {
  color: #FFFFFF;
  background-color: lightblue;
}
.react-calendar__tile--active {
    background-color: #126BA5;
}
.react-calendar__tile.react-calendar__month-view__days__day.react-calendar__month-view__days__day--neighboringMonth {
  color: #DBDBDB;
}
.complete {
  color: #FFFFFF;
  background-color: #8FC549;
}
.complete:hover {
  background-color: lightgreen;
}
.incomplete {
  color: #FFFFFF;
  background-color: #E75766;
}
.incomplete:hover {
  background-color: lightpink;
}
`;

const DayStatus = styled.ul`
width: 100%;
height: auto;
background-color: #FFFFFF;
padding: 10px 20px;
border-radius: 5px;
flex-direction: column;
align-items: center;
box-sizing: border-box;
li {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`;
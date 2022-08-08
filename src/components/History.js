import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { SubHeader } from "./common";
import { getHistory } from '../services/APIs';
import '../../node_modules/react-calendar/dist/Calendar.css';
import styled from 'styled-components';

export default function History () {
  const [value, onChange] = useState(new Date());

  useEffect(() => {
		getHistory()
      .catch((error) => {
        alert(error.message);
      })
      .then((history) => {
        const historyDays = history.data.map(dayHistory => dayHistory.day);
        const daysUndone = history.data.map(dayHistory => dayHistory.habits).map(element => element.filter(value => !value.done));
        const arrayAux = [];
        for (let i = 0; i < historyDays.length; i++) {
          (daysUndone[i].length === 0) ?
          arrayAux.push({day: historyDays[i], dayDone: true})
          : arrayAux.push({day: historyDays[i], dayDone: false});
        }
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
          <Calendar onChange={onChange} value={value} />
        </Div>
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
  height: 300px;
}
.react-calendar__month-view__weekdays__weekday {
  color: #000000;
}
.react-calendar__tile--active {
    background: #126BA5;
}
.react-calendar__tile.react-calendar__month-view__days__day.react-calendar__month-view__days__day--neighboringMonth {
  color: #DBDBDB;
}
`
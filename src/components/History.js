import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import { differenceInCalendarDays } from 'date-fns';
import { SubHeader } from "./common";
import { getHistory } from '../services/APIs';
import '../../node_modules/react-calendar/dist/Calendar.css';
import styled from 'styled-components';

export default function History () {
  const [value, setValue] = useState(new Date());
  const [daysHistory, setDaysHistory] = useState([]);

  //console.log(value);

  // function isSameDay(a, b) {
  //   return differenceInCalendarDays(a, b) === 0;
  // }

  function tileClassName (date) {
    if (dayjs(date.date).format("DD/MM/YYYY") !== dayjs(new Date()).format("DD/MM/YYYY")) {
      const daysDone = daysHistory
      .filter(done => done.dayDone)
      .map(value => value.day)
      .filter(day => day === dayjs(date.date).format("DD/MM/YYYY"));
      
      const daysUndone = daysHistory
      .filter(done => !done.dayDone)
      .map(value => value.day)
      .filter(day => day === dayjs(date.date).format("DD/MM/YYYY"));

      if (daysDone.length === 1) {
        return "complete";
      }
      if (daysUndone.length === 1) {
        return "incomplete";
      }
    }
  }

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
        setDaysHistory(arrayAux);
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
          value={value}
          showWeekNumbers={false}
          locale="pt-br"
          calendarType="US"
          tileClassName={tileClassName} />
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
.react-calendar__tile--active {
    background: #126BA5;
}
.react-calendar__tile.react-calendar__month-view__days__day.react-calendar__month-view__days__day--neighboringMonth {
  color: #DBDBDB;
}
.complete {
  color: #FFFFFF;
  background-color: #8FC549;
}
.incomplete {
  color: #FFFFFF;
  background-color: #E75766;
}
`
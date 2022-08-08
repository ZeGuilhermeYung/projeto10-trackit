import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { SubHeader } from "./common";
import '../../node_modules/react-calendar/dist/Calendar.css';
import styled from 'styled-components';

export default function History () {
  const [value, onChange] = useState(new Date());

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
.react-calendar__tile--active {
    background: #126BA5;
}
`
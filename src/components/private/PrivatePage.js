import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import UserContext from "../../context/UserContext";
import { getTodayHabits } from "../../services/APIs";

export default function PrivatePage({ children }) {
  require("dayjs/locale/pt-br");
  const authData = JSON.parse(localStorage.getItem("userData"));
  const { progressHabits, setProgressHabits } = useContext(UserContext);

  useEffect(() => {
		getTodayHabits()
      .catch((error) => {
        alert(error.message);
      })
      .then((habits) => {
        setProgressHabits(Math.round((habits.data.filter(habit => habit.done).length / habits.data.length) * 100));
      });
    }, [progressHabits]);

  return (
    <>
    {authData ? 
      <Private>
        <Header name={authData.name} image={authData.image} />
          {children}
        <Footer />
      </Private>
      : <Navigate to="/" />}
    </>
  );
}

const Private = styled.section`
> section {
  margin: 70px 18px 111px 18px;
}
main > div {
  width: 100%;
  height: 94px;
  background-color: #FFFFFF;
  padding: 13px 13px 13px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
main > div > div {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.calendar {
  width: 100%;
  height: 250px;
  padding: 0;
}
form {
  width: 100%;
  height: 180px;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 18px 18px 15px 18px;
  margin-bottom: 29px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}
span {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
span h5 {
  margin-right: 23px;
  cursor: pointer;
}
main ul {
  display: flex;
}
`;
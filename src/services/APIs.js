import axios from "axios";

function userHeaders () {
  const authToken = JSON.parse(localStorage.getItem("userData"));
  const userToken = {
    headers: {
      Authorization: `Bearer ${authToken.token}`
    }
  };
  return userToken;
}

const urlAPI = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function registerUser (body) {
  const promise = axios.post(`${urlAPI}/auth/sign-up`, body);
  return promise;
}

function loginUser (body) {
  const promise = axios.post(`${urlAPI}/auth/login`, body);
  return promise;
}

function getTodayHabits () {
  const userToken = userHeaders();
  const promise = axios.get(`${urlAPI}/habits/today`, userToken);
  return promise;
}

function getHabits () {
  const userToken = userHeaders();
  const promise = axios.get(`${urlAPI}/habits`, userToken);
  return promise;
}

function postNewHabit (body) {
  const userToken = userHeaders();
  const promise = axios.post(`${urlAPI}/habits`, body, userToken);
  return promise;
}

function deleteHabit(habitId) {
  const userToken = userHeaders();
  const promise = axios.delete(`${urlAPI}/habits/${habitId}`, userToken);
  return promise;
}

export { userHeaders, loginUser, registerUser, getTodayHabits, getHabits, postNewHabit, deleteHabit }
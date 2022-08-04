import axios from "axios";

const urlAPI = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function postRegister(body) {
  const promise = axios.post(`${urlAPI}/auth/sign-up`, body);
  return promise;
}

function postLogin(body) {
  const promise = axios.post(`${urlAPI}/auth/login`, body);
  return promise;
}


export { postLogin, postRegister }
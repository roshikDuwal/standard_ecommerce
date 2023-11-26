import { Axios } from "../utils/axios";
import { BASE_URL } from '../config';

const axios = new Axios();

export const login = async (data) => {
    const { data: logInData } = await axios.post(`${BASE_URL}admin/login`, data);
    
    if (logInData) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...logInData.data
          })
        );
      }
}

export const contact = async (data) => {
  const res = await axios.post(`${BASE_URL}contact/store`, data);
  return res;
}

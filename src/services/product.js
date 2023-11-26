import { Axios } from "../utils/axios";
import { BASE_URL } from '../config';

const axios = new Axios();

export const addProduct = async (data) => {
    const res = await axios.post(`${BASE_URL}product/store`, data);
    return res.data
}
export const getProduct = async () => {
    const res = await axios.get(`${BASE_URL}product/index`);
    return res.data.product
}
export const getProductDetail = async (slug) => {
    const res = await axios.get(`${BASE_URL}product/${slug}`);
    return res.data.products
}
export const getHomeData = async () => {
    const res = await axios.get(`${BASE_URL}home`);
    return res.data;
}
export const getSearchData = async (keywork) => {
    const res = await axios.get(`${BASE_URL}search?k=${keywork}`);
    return res.data;
}
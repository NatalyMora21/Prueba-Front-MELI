import axios from 'axios';
import { request, gql } from 'graphql-request'

const BASE_URL = process.env.REACT_APP_API_URL;
console.log(BASE_URL);

export const getAllItems = async (search) => {
  const {data}= await axios(`${BASE_URL}/items/${search}`);
  console.log(data);
  return data;
}


export const getItem = async (id) => {
  const {data} = await axios(`${BASE_URL}/item/${id}`);
  console.log(data);
  return data;

}
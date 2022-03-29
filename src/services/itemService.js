import axios from 'axios';
import { request, gql } from 'graphql-request'
import {querySearchItems, queryInfoItem}  from './query'

const BASE_URL = process.env.REACT_APP_API_URL;
console.log(BASE_URL);

export const getAllItems = async (search) => {
  const query = querySearchItems (search) ;
  return request(`${BASE_URL}`, query).then((data) => data.getAllItemsType)
}


export const getItem = async (id) => {
  const query = queryInfoItem(id)

  return request(`${BASE_URL}`, query).then((data) => data.getItem)

}
import axios from 'axios';
import { request, gql } from 'graphql-request'
import {querySearchItems, queryInfoItem}  from './query'

const baserUrl = ''

export const getAllItems = async (search) => {

  const query = querySearchItems (search) ;
  return request('http://localhost:4001/graph', query).then((data) => data.getAllItemsType)

}


export const getSearchItems = async (id) => {
  const query = queryInfoItem(id)
  return request('http://localhost:4001/graph', query).then((data) => data.getAllItemsType)

}
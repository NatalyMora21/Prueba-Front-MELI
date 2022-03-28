import axios from 'axios';
import { request, gql } from 'graphql-request'

const baserUrl = ''

export const getAllItems = async  (search) => {

    const query = gql`
    {
        getAllItemsType(search: "${search}") {
            id
            title
            price
            { currency amount decimals} 
            picture 
            condition 
            free_shipping 
            sold_quantity
      }
    }
  `
  return request('http://localhost:4001/graph', query).then((data) => data.getAllItemsType)



        
}


export const getSearchItems = async(value) => {
    const res = await axios.get()

}
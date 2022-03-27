import axios from 'axios';

const baserUrl = ''

export const getAllItems = async  (search) => {

    const data = await axios.post('http://localhost:4001/graph', {query: `query {getAllItemsType (search:"${search}") {id title price  { currency amount decimals} picture condition free_shipping sold_quantity}}`})
    return (data);
}


export const getSearchItems = async(value) => {
    const res = await axios.get()

}
import axios from 'axios';

const baserUrl = ''

export const getAllItems = async  () => {
    const res = await axios.get()
    return res.data;

}


export const getSearchItems = async(value) => {
    const res = await axios.get()
    return res.data;
}

export const getItem = async(id) => {
    const res = await axios.get()
    return res.data;

} 
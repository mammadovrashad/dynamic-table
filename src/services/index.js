import axios from 'axios';


export const getTableData=async(item)=>{
    return await axios.get(`https://jsonplaceholder.typicode.com/${item}`)
}
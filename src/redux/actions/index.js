
import {getTableData} from '../../services/index'
import { GET_TABLE_DATA } from './constants'





export const getData=(item)=> {
    return  async(dispach)=>{
        getTableData(item.toLowerCase()).then(res=>{
            dispach({
                type:GET_TABLE_DATA,
                payload:res.data
            })
        })
    }
}


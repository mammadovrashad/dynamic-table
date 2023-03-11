
import {getTableData} from '../../services/index'





export const getData=(item)=> {
    return  async(dispach)=>{
        getTableData(item.toLowerCase()).then(res=>{
            dispach({
                type:'GET_TABLE_DATA',
                payload:res.data
            })
        })
    }
}


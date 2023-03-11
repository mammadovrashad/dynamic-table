

export const getDataReducer=(state=[],action)=>{
 switch (action.type) {
    case 'GET_TABLE_DATA':   
       return state=action.payload
    default:
        return state;
 }
}


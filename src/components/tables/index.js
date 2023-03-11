import React from 'react'
import Buttons from '../buttons'
import { useSelector } from 'react-redux'

const Tables = () => {

  const datas=useSelector(v=>v.data);

  return (
    <>
    <div>
        <Buttons value={'Todos'}/>
        <Buttons value={'Posts'}/>
        <Buttons value={'Comments'}/>
        <Buttons value={'Albums'}/>
        <Buttons value={'Photos'}/>
        <Buttons value={'Users'}/>
    </div>
    <table>
        <thead>
            <tr>
                datas.map(()=>{})
            </tr>
        </thead>
    </table>
    </>
  )
}

export default Tables;
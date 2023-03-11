import React from 'react'
import Buttons from '../buttons'
import { useSelector } from 'react-redux'

const Tables = () => {

  const datas=useSelector(v=>v.data)
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
    <table border={'1px'}>
        <thead>
          <tr>
            {datas[0] &&
              Object.entries(datas[0]).map(([key, value]) => <th>{key} </th>)}
          </tr>
        </thead>
        <tbody>
          {datas?.map((item) => {
            return (
              <tr key={item.id}>
                {Object.entries(item).map(([key, value]) => {
                  return <td key={item.id}>{String(value)} </td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
}

export default Tables;
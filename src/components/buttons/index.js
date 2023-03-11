
import './style.css'
import { getData } from '../../redux/actions'
import {useDispatch} from 'react-redux'

const Buttons = (props) => {
  const dispach=useDispatch();
   
  return (
    <button className='btn' onClick={()=>{ dispach(getData(props.value))}}>{props.value}</button>
  )
}

export default Buttons
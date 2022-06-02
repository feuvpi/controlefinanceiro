import React from 'react';
import * as C from './Styles.jsx';
import { 
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from 'react-icons/fa';

const ListItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td alignCenter>{item.isExpense ? (<FaRegArrowAltCircleDown color="red"/>) : (<FaRegArrowAltCircleUp color="green"/>)}</C.Td>
      <C.Td alignCenter>{<FaTrash onClick={() => onDelete(item.id)}/>}</C.Td>
    </C.Tr>
  )
}

export default ListItem
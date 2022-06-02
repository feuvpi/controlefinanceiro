import React from 'react'
import * as C from './Styles';
import ListItem from '../ListItem/ListItem';

const List = ({items, setItems}) => {

  const onDelete = (ID) => {
    const newArray = items.filter((transaction) => transaction.id !== ID);
    setItems(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Descrição</C.Th>
          <C.Th width={20}>Valor</C.Th>
          <C.Th width={30}>Natureza</C.Th>
          <C.Th width={5}>Deletar</C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {items?.map((item, index) => (
          <ListItem key={index} item={item} onDelete={onDelete}/>
        ))}
      </C.Tbody>
    </C.Table>
  )
}

export default List
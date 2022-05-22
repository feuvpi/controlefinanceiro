import React from 'react';
import ItemResume from '../ItemResume/ItemResume';
import { 
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown, 
  FaDollarSign } from "react-icons/fa";

const Summary = ({income, expense, total}) => {
  return (
    <div className="h-56 mx-2 md:mx-12 md:w-md flex flex-row m-auto justify-around gap-2">
      <ItemResume title="ENTRADAS" Icon={FaRegArrowAltCircleUp} value={income}/>
      <ItemResume title="SAÍDAS" Icon={FaRegArrowAltCircleDown} value={expense}/>
      <ItemResume title="TOTAL" Icon={FaDollarSign} value={total}/>
    </div>
  )
}

export default Summary;
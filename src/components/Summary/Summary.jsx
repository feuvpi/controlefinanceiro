import React from 'react';
import ItemResume from '../ItemResume/ItemResume';
import { 
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown, 
  FaDollarSign } from "react-icons/fa";

const Summary = () => {
  return (
    <div className="h-56 mx-2 md:mx-12 md:w-md flex flex-row m-auto justify-around gap-2">
      <ItemResume title="ENTRADAS" Icon={FaRegArrowAltCircleUp}/>
      <ItemResume title="SAÍDAS" Icon={FaRegArrowAltCircleDown}/>
      <ItemResume title="TOTAL" Icon={FaDollarSign}/>
    </div>
  )
}

export default Summary;
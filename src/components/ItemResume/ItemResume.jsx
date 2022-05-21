import React from 'react';



const ItemResume = ({ title, Icon }) => {
  return (
    <div className="max-h-36 w-42 flex flex-col align-center justify-content rounded-md p-6 -mt-4 hover:-mt-1 w-auto bg-indigo-400">
      <header className="flex  align-center justify-around w-full gap-10">
        <p className="text-md align-center">{title}</p>
        <Icon/>
      </header>
      <span className="text-center pt-8 md:text-4xl">1000</span>

    </div>
  )
}

export default ItemResume;
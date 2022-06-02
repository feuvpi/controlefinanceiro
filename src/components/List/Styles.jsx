import React from 'react';
import styled from "styled-components";

/*
export const Table = () => {
  return (
    <table className="w-11/12 bg-indigo-300 p-2 shadow-sm rounded-sm max-w-6xl m-4"></table>
  )
};
*/

export const Table = styled.table`
  width: 98%;
  background-color: #ffff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
`;

/*
export const Thead = () => {
  return (
    <thead></thead>
  )
    
};
*/

export const Thead = styled.thead`
    padding: 10px;
    `;

export const Tbody = styled.tbody``;
export const Tr = styled.tr``;

/*
export const Tbody = () => {
  return(<tbody></tbody>)
};
*/

/*
export const Tr = () => {
  return(
    <tr></tr>
  )
    
};
*/


/*
export const Th = () => {
    <th className="text-start align-start rounded-b-sm pb-4"></th>
};
*/

// using styled to use style with props
export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  padding: 10px;
  text-align: ${(props)  => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width? props.width + "%" : "auto")};
`;







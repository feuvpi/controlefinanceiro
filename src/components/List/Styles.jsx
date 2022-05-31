import React from 'react';
import styled from "styled-components";

export const Table = () => {
  return (
    <table className="w-11/12 bg-indigo-300 p-2 shadow-sm rounded-sm max-w-6xl m-4"></table>
  )
};

export const Thead = () => {
    <thead></thead>
};

export const Tbody = () => {
    <tbody></tbody>
};

export const Tr = () => {
    <tr></tr>
};


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
  text-align: ${(props)  => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width? props.width + "%" : "auto")};
`;







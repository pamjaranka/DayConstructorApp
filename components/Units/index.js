import React from 'react';
import Unit from './Unit';
import {parseUnits} from './utils';

function Units(props) {
  const data = parseUnits(props.data);
  const units = () => {
    const items = [];
    data.forEach(item => {
      items.push(
        <Unit
          name={item.name}
        />
      );
      return items;
    })
  }
  return (
      <>
        {units()}
      </>
  );
}

export default Units;

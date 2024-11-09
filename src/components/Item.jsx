import React, { useEffect, useState } from 'react';
import { slugify } from '../utils.js';


const Item = ({ item, isCurrent, onClick, children }) => {
  return (
    <li className={`${isCurrent ? 'fw9' : ''} pv1 ph2`}>
      {children ? (
        children
      ) : (
        <a href={`#${encodeURIComponent(slugify(item.name))}`} onClick={() => onClick(item)}>
          {item.name}
        </a>
      )}
    </li>
  );
};

export default Item;
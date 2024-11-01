import React, { useEffect, useState } from 'react';
import { slugify } from '../utils.js';

const Item = ({ list, isCurrent, onClick }) => {
  return (
    <li className={`${isCurrent ? 'underline' : ''} pv1 ph2`}> 
      <a href={`#${encodeURIComponent(slugify(list.name))}`} onClick={() => onClick(list)}>
        {list.name}
      </a>
    </li>
  );
};

export default Item;
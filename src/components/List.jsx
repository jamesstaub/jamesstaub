import React, { useEffect, useState } from 'react';
import Item from "../components/Item"
const List = ({ items, loadList, selectedList, target }) => {
  return (
    <div>
      <h3 className="ttc">{target}</h3>
      <ul className="list pl0 ">
        {items.filter((i) => i.target === target).map((item, index) => (
          <Item
            key={index}
            list={item}
            onClick={loadList}
            isCurrent={selectedList?.name === item.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
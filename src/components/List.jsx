import React from 'react';
import Item from "../components/Item"
const List = ({ items, loadList, selectedList, target }) => {
  return (
    <div>
      {target && <h3 className="ttc mv0 pl2">{target}</h3>}
      <ul className={`list mv0 ${target ? "pl2" : "pl0"}`}>
        {items.filter((i) => i.target === target).map((item, index) => (
          <Item
            key={index}
            item={item}
            onClick={loadList}
            isCurrent={selectedList?.name === item.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
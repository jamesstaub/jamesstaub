import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import List from "../components/List";
import { slugify } from '../utils.js';


const PageTemplate = ({pageName, items}) => {
  const [selectedList, setSelectedList] = useState(null);

  const loadList = (list) => {
    setSelectedList(list);
    window.location.hash = slugify(list.name);
  };

  const resetList = () => {
    setSelectedList(null);
    window.location.hash = '';
  };
  
  const targets = items.map((i)=>i.target).reduce((acc, v) => {
    if (!acc.includes(v)) {
      acc.push(v);
    }
    return acc;
  }, []);

  useEffect(() => {
    const listSlug = window.location.hash.slice(1);
    const matchingList = items.find((list) => slugify(list.name) === listSlug);

    if (items.length === 1) setSelectedList(items[0]);

    if (matchingList) setSelectedList(matchingList);
    else setSelectedList(null);
  }, []);

  return (
    <div id={pageName}>
      <Header />
      {selectedList && (
        <button className="ml3 text-btn dn-ns db ph0 pv2" onClick={resetList}>
          ← Back
        </button>
      )}
      <section>
        <div className="pv2 pa2 flex flex-column flex-row-ns">
          {/* Left Sidebar */}
          <div className={`sidebar w-100 w-50-ns mw5 ${selectedList ? 'dn db-ns' : ''}`}>
            <nav>
              {targets.map((target, idx)=> (<List id={idx} key={idx} items={items} loadList={loadList} selectedList={selectedList} target={target}/>))}
              
            </nav>
          </div>

          {/* List Details Section */}
          <div className={`list-detail ml5-ns w-100 ${selectedList ? 'mw6-ns' : 'dn'}`}>
            {selectedList ? (
              <>
                <h2 className="f3 lh-title mt1 tl-ns mw6">
                  
                  {selectedList.name}{selectedList.year && ' - '}{selectedList.year}
                </h2>
                {selectedList.iframe && selectedList.iframe()}
                <div className="f5 lh-copy measure mt2-ns">{selectedList.desc}</div>
              </>
            ) : (
              null
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageTemplate;
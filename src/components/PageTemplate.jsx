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
      <button className="ml3 text-btn dn-ns db ph0 pv2" onClick={resetList}>
        ← Back
      </button>
      <section>
        <div className="pv2 pa3 flex flex-column flex-row-ns">
          {/* Left Sidebar */}
          <div className={`sidebar w-100 w-50-ns mw5 ${selectedList ? 'dn db-ns' : ''}`}>
            <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">{pageName}</h1>
            <nav>
              {targets.map((target, idx)=> (<List id={idx} items={items} loadList={loadList} selectedList={selectedList} target={target}/>))}
              
            </nav>
          </div>

          {/* List Details Section */}
          <div className={`list-detail ml5 w-100 ${selectedList ? 'w-100-ns' : 'dn'}`}>
            {selectedList ? (
              <>

                <h2 className="f3 lh-title mt1 mt3-ns tl-ns mw6">
                  
                  {selectedList.name}{selectedList.year && ' - '}{selectedList.year}
                </h2>
                {selectedList.iframe && selectedList.iframe()}
                <p className="f5 lh-copy measure mt2-ns">{selectedList.desc}</p>
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
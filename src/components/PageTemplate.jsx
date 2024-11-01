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
  
  const targets = items.map((i)=>i.target);

  useEffect(() => {
    const listSlug = window.location.hash.slice(1);
    const matchingList = items.find((list) => slugify(list.name) === listSlug);
    if (matchingList) setSelectedList(matchingList);
    else setSelectedList(null);
  }, []);

  return (
    <>
      <Header />
      <button className="ml3 text-btn dn-ns db ph0 pv2" onClick={resetList}>
        ← Back
      </button>
      <section>
        <div className="pv2 pa3 flex flex-column flex-row-ns">
          {/* Left Sidebar */}
          <div className={`sidebar w-100 w-50-ns ${selectedList ? 'dn db-ns' : ''}`}>
            <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">{pageName}</h1>
            <nav>
              {targets.map((target)=><List items={items} loadList={loadList} selectedList={selectedList} target={target}/>  )}
              
            </nav>
          </div>

          {/* List Details Section */}
          <div className={`list-detail w-100 ${selectedList ? 'w-100-ns' : 'dn'}`}>
            {selectedList ? (
              <>

                <h2 className="f3 lh-title mt1 tl-ns">
                  {selectedList.name} - {selectedList.year}
                </h2>
                <iframe
                  className="ma0-ns db"
                  title={selectedList.name}
                  src={selectedList.src}
                  width="350"
                  height="350"
                  frameBorder="0"
                  allowFullScreen
                  aria-describedby={`desc-${selectedList.name}`}
                ></iframe>
                <p className="f5 lh-copy measure mt2-ns">{selectedList.desc}</p>
              </>
            ) : (
              <p>Select an list to view details.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PageTemplate;
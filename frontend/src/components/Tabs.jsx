import { useState } from "react";
import "../index.css";
import ComplaintItem from './ComplaintForm'

function Tabs() {
  const [currentTab, setCurrentTab] = useState('1');
  const tabs = [
      {
          id: 1,
          tabTitle: 'Update User Information',
          title: 'User Details',
          content: <ComplaintItem />
      },
      {
          id: 2,
          tabTitle: 'Add User',
          title: 'User Details',
          content: <ComplaintItem />
      },
      {
          id: 3,
          tabTitle: 'Complaints',
          title: 'User Complaints',
          content: <ComplaintItem />
      },
      {
          id: 4,
          tabTitle: 'Tab 4',
          title: 'Title 4',
          content: <ComplaintItem />
      }
  ];

  const handleTabClick = (e) => {
      setCurrentTab(e.target.id);
  }

  return (
      <div className='container-tabs'>
          <div className='tabs'>
              {tabs.map((tab, i) =>
                  <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
              )}
          </div>
          <div className='content'>
              {tabs.map((tab, i) =>
                  <div key={i}>
                      {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p>{tab.content}</p></div>}
                  </div>
              )}
          </div>
      </div>
  );
}

export default Tabs;
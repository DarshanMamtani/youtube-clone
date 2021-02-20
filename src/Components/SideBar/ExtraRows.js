import React from 'react';
import SideBarRow from './SideBarRow';


const ExtraRows = ({ open, showMore }) => {
  if (showMore) {
    return (
      <div>
        <SideBarRow title="Subscription 1" open={open} />
        <SideBarRow title="Subscription 2" open={open} />
        <SideBarRow title="Subscription 3" open={open} />
        <SideBarRow title="Subscription 4" open={open} />
        <SideBarRow title="Subscription 5" open={open} />
        <SideBarRow title="Subscription 6" open={open} />
        <SideBarRow title="Subscription 7" open={open} />
        <SideBarRow title="Subscription 8" open={open} />
        <SideBarRow title="Subscription 9" open={open} />
      </div>
    );
  }
  else {
    return <div></div>;
  }
}

export default ExtraRows;
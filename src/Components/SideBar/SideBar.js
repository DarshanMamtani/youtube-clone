import React, {useState} from 'react';
import './SideBar.css';
import SideBarRow from './SideBarRow';
import ExtraRows from './ExtraRows';

const SideBar = ({ open, onShowMore, showMore }) => {
  if (open == true) {
    return (
      <div className="sideBar">
        <SideBarRow title="Home" selected open={open}/>
        <SideBarRow title="Trending" open={open}/>
        <SideBarRow title="Subscriptions" open={open}/>

        <hr />
        <SideBarRow title="Library" open={open}/>
        <SideBarRow title="History" open={open}/>
        <SideBarRow title="Your Videos" open={open}/>
        <SideBarRow title="Watch Later" open={open}/>
        <SideBarRow title="Click to Show More" open={open} onShowMore={onShowMore} />
        <ExtraRows open={open} showMore={showMore}/>
        <hr />
        <SideBarRow title="Library" open={open}/>
        <SideBarRow title="History" open={open}/>
        <SideBarRow title="Your Videos" open={open}/>
        <SideBarRow title="Watch Later" open={open}/>
        <SideBarRow title="Library" open={open}/>
        <SideBarRow title="History" open={open}/>
        <SideBarRow title="Your Videos" open={open}/>
        <SideBarRow title="Watch Later" open={open}/>
      </div>
    );
  } else {
    return (
      <div className={`sideBar ${!open && "sideBar-collapse"}`}>
        <SideBarRow title="Home" selected open={open}/>
        <SideBarRow title="Trending" open={open}/>
        <SideBarRow title="Subscriptions" open={open}/>
      </div>
    );
  }
}

export default SideBar;
import React from 'react';
import './SideBarRow.css';
import HomeIcon from '@material-ui/icons/Home';




const SideBarRow = ({ title, selected, open, onShowMore }) => {
  return (  
    <div className={`sideBarRow ${selected && "selected"} ${!open && "sideBarRow-collapse"}`} onClick={onShowMore}>
      <HomeIcon className="icon"/>
      <h2 className="title">{title}</h2>
    </div>
  );
}
 
export default SideBarRow;
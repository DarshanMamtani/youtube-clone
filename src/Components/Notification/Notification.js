import React from 'react';
import './Notification.css';
import SideBarRow from '../SideBar/SideBarRow'


const UserProfile = ({ notify }) => {
  if (notify) {
    return (
      <div className="notify">
        <SideBarRow title="Notification 1" open={true} />
        <SideBarRow title="Notification 2" open={true} />
        <SideBarRow title="Notification 3" open={true} />
        <SideBarRow title="Notification 4" open={true} />
        <SideBarRow title="Notification 5" open={true} />
        <SideBarRow title="Notification 6" open={true} />
        <SideBarRow title="Notification 7" open={true} />
        <SideBarRow title="Notification 8" open={true} />
        <SideBarRow title="Notification 9" open={true} />
        <SideBarRow title="Notification 10" open={true} />
        <SideBarRow title="Notification 11" open={true} />
        <SideBarRow title="Notification 12" open={true} />
        <SideBarRow title="Notification 13" open={true} />
        <SideBarRow title="Notification 14" open={true} />
        <SideBarRow title="Notification 15" open={true} />
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default UserProfile;

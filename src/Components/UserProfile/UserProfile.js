import React from 'react';
import './UserProfile.css';
import SideBarRow from '../SideBar/SideBarRow'

const UserProfile = ({ user }) => {
  if (user) {
    return (
      <div className="userProfile">
        <SideBarRow title="Your Channel" open={true} />
        <SideBarRow title="Youtube Studio" open={true} />
        <SideBarRow title="Youtube Studio" open={true} />
        <SideBarRow title="Purchases" open={true} />
        <SideBarRow title="Sign Out" open={true} />
        <hr />
        <SideBarRow title="Something" open={true} />
        <SideBarRow title="Something" open={true} />
        <SideBarRow title="Something" open={true} />
        <SideBarRow title="Something" open={true} />
        <SideBarRow title="Something" open={true} />
        <SideBarRow title="Something" open={true} />
        <SideBarRow title="Something" open={true} />
        <SideBarRow title="Something" open={true} />
        <SideBarRow title="Something" open={true} />
        
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default UserProfile;

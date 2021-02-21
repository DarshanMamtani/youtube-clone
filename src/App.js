import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import Home from './Components/Home/Home';
import UserProfile from './Components/UserProfile/UserProfile'
import Notification from './Components/Notification/Notification'


function App() {
  // For BurgerMenu
  const[ open, setOpen ] = useState(false);
  // for userProfile
  const[ user, setUser ] = useState(false);
  //for notification
  const[ notify, setNotify ] = useState(false);
  //for show more on side bar
  const[ showMore, setShowMore ] = useState(false);
  
  const onBurgerClick = () => {
    setOpen(!open);
  }

  const onProfileClick = () => {
    setUser(!user);
    setNotify(false);
  }

  const onNotificationClick = () => {
    setNotify(!notify);
    setUser(false);
  }

  const onShowMore = () => {
    setShowMore(!showMore);
  }

  let width = window.innerWidth;
  window.addEventListener("resize", () => {
    width = window.innerWidth;
    if(width < 576){
      setOpen(false);
    }
  });

  return (
    <div className="app">
      <Header onBurgerClick={onBurgerClick} onProfileClick={onProfileClick} onNotificationClick={onNotificationClick} />
      <UserProfile user={user} />
      <Notification notify={notify} />
      <div className="homePage">
        <SideBar className="sideBar" open={open} onShowMore={onShowMore} showMore={showMore} />
        <Home open={open}/>
      </div>
      
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import {useState} from 'react';
import AllRoutes from './allroutes';
import DrawerSideBar from './drawersidebar';
import CreateEditChanel from './CreateEditChanel';

function App() {
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display : 'none',
  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==='none'){
      setToggleDrawerSidebar({
        display: 'flex'
      })
    }else{
      setToggleDrawerSidebar({
        display:'none'
      })
    }
  }



  return (
    <Router>
      <CreateEditChanel/>
      <Navbar 
      toggleDrawer ={toggleDrawer} 
      />
      
        <DrawerSideBar
        toggleDrawer ={toggleDrawer} 
        toggleDrawerSidebar ={toggleDrawerSidebar} 
        />
     
      <AllRoutes/>
      
    </Router>
  );
}

export default App;

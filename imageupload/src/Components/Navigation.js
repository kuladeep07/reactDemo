import React from 'react';
 
import { NavLink } from 'react-router-dom';

import classes from "./Navigation.module.css"
 
const Navigation = () => {
    return (
       <div className={classes["side-bar"]}>
        
          <NavLink to="/" className={classes.link}>Home</NavLink>
        
       
          <NavLink to="/image" className={classes.link}>Image</NavLink>
       
        
          <NavLink to="/video" className={classes.link}>Video</NavLink>
     
       </div>
    );
}
 
export default Navigation;


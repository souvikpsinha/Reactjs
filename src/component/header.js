import React from "react";
import {Button} from 'react-bootstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";


function Header(){
    return(
        
        <nav>
            <Button variant="warning" className="btn">Login</Button>
        
            <ul>
      <li>
        <Link to="/footer">footer</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
     
    </ul>
      </nav>
      
    )
};


export default Header

import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import '../CSS/styling.css';
const Nav = () => {
  return (
    
    <Navbar className = 'color-nav' variant = 'dark'>
            <Navbar.Brand><Link to = "/">Home</Link></Navbar.Brand>
            <Navbar.Brand><Link to = "/About">About</Link></Navbar.Brand>
            <Navbar.Brand><Link to = "/Data">Data</Link></Navbar.Brand>
        </Navbar>
    
  );
}
 
export default Nav;
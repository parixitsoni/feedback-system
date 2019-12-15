import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) => {
        return (
          
            <nav className="navbar bg-dark">
                <h1>  
                <a href='/'>{title}<i className={icon} /></a>
                </h1>      
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/Dashbord'>Dashbord</a></li>
                    <li><a href='/Logout'>Logout</a></li>
                </ul>                  
                
            </nav>
          
        );
};
 

Navbar.defaultProps = {
    title: 'Feedback  ',
    icon: 'fa fa-commenting-o fa-lg',
    expire: 'Logout'
};


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;

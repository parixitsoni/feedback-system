import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon, title,expire}) => {
        return (
            <nav className="navbar bg-dark">
                <h1>  
                {title}<i className={icon} />
                </h1>                        
                <a href='login.js'>Logout</a>      
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

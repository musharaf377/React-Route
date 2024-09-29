import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = ({route}) => {
    return (
        <li><Link to={route.path}>{route.name}</Link></li>
    );
};

export default NavMenu;
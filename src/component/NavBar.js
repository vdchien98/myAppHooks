import React from 'react';
import './NavBar.scss';
const NavBar = () => {
    const style = {
        background: 'rgb(240,240,240)',
        color: 'black',
    };
    return (
        <ul class="nav nav-pills header" style={style}>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                    Home
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    About
                </a>
            </li>
        </ul>
    );
};

export default NavBar;

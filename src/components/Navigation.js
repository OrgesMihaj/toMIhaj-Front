import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        // Navigation section starts here
    	<nav className="c-nav">
    		<ul className="c-nav__list">
    			<li className="c-nav__item">
                    <NavLink className="c-nav__link" to="/contact">Work.</NavLink>
    			</li>
    			<li className="c-nav__item">
                    <NavLink className="c-nav__link" to="/portfolio">Work.</NavLink>

    			</li>
    			<li className="c-nav__item">
                    <NavLink className="c-nav__link" to="/about">Who?</NavLink>
    			</li>
    			<li className="c-nav__item">
                    <NavLink className="c-nav__link c-nav__link--is-active" to="/">Hi.</NavLink>
    			</li>
    		</ul>
    	</nav>
        // Navigation section starts here


    )
}

export default Navigation;

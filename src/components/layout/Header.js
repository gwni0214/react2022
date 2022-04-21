import React from "react";
import {Link} from 'react-router-dom';
function Header(props){
    return (
        <header id="header" className={props.color}>
            <div className="header__port">
                <Link to="/portfolio">portfolio</Link>
            </div>
            <div className="header__logo">                
                <Link to="/">gwni</Link>                
            </div>
            <nav className="header__menu">              
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/reference">Reference</Link></li>
                    <li><Link to="/youtube">Youtube</Link></li>
                    <li><Link to="/script">Script</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>                               
            </nav>
        </header>
    )
}

export default Header;
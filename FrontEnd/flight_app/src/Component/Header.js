import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import "./header.css";
function Header() {
    return (
        <nav className="header">
            
              <div className='header_nav'>
                <Link className="header_link" activeClassName={'active'} to="/login">
                    <div className='login'>
                    <span>login</span>
                    </div>
                </Link>
                <Link className="header_link" to="/singup">
                <div className='singup'>
                    <span>Singup</span>
                    </div>
                   
                    </Link>
                   
                    <Link className="header_link" to="/contact">
                <div className='contact'>
                    <span>Contact</span>
                    </div>
                   
                    </Link>
                    <Link className="header_link" to="/">
                        <div>
                             <img className='header_logo' src='https://www.clipartmax.com/png/full/200-2002475_red-paper-plane-png-image-paper-plane-logo.png'/> 
                             
                        </div>
                
            </Link>
            
            </div>
            
           
                
        </nav>
    )
}

export default Header

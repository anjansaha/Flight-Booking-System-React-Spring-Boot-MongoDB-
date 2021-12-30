import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './header.css'
function AdminHeader() {
    return (
        <div>
            <nav className="header">
            
            <div className='header_nav'>
              <Link className="header_link" to="/admin">
                  <div className='login'>
                  <span>ADMIN</span>
                  </div>
              </Link>
              <Link className="header_link" to="/list">
                <div className='FlightLink'>
                    <span>FLIGHT LIST</span>
                    </div>
                   
                    </Link>
                    <Link className="header_link" to="/addflight">
                <div className='FlightLink'>
                    <span>ADD FLIGHT</span>
                    </div>
                   
                    </Link>
            
                  <Link className="header_link" to="/">
                      <div>
                           <img className='header_logo' src='https://www.clipartmax.com/png/full/200-2002475_red-paper-plane-png-image-paper-plane-logo.png'/> 
                           
                      </div>
              
          </Link>
          
          </div>
          
         
              
      </nav>
        </div>
    )
}

export default AdminHeader

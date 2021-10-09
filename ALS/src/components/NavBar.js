import React, { useState } from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "gatsby" 
import { SidebarData, TopNaVData } from "./SidebarData"
import { IconContext } from "react-icons"
import { useAuth0 } from "@auth0/auth0-react"
import Button from "react-bootstrap/Button"
import "./Navbar.css"
// import {Container, Navbar} from 'react-bootstrap'






const NavBarM = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  const { loginWithRedirect, logout,  user, isAuthenticated, isLoading } = useAuth0()
  

  return (
    <>
      {/* Inspiration from the Navbar concept here --  https://www.youtube.com/watch?v=CXa0f4-dWi4*/}

      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">


          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>


          {/* <h1>ALS</h1> */}
            <ul className="ul-nav">
           

              {TopNaVData.map((item, index) =>{
                return(
                  <li key={index} >
                  <Link to={item.path}>
                    {/* {item.icon} */}
                    <span>{item.title}</span>
                  </Link>
                </li>
                )              
              })}
                
        
            </ul>



          <div className="auth">
            {!isAuthenticated ? (
              
              <>
                <Button className="mobile-btn signup" variant="primary" onClick={() => loginWithRedirect()}>
                  Signup
                </Button>
                  <Button className="mobile-btn login" onClick={() => loginWithRedirect()}>
                LogIn
              </Button>
              </>
              
            ) : (
              <>
              <p>Welcome {user.name}</p>
              <Button
                className="mobile-btn logout"
                variant="secondary"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                <p>Welcome {user.name}</p>--
                Logout
              </Button>
              </>
            )}
          </div>


        </nav>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>

   

      
      

      
    </>
  )
}

export default NavBarM

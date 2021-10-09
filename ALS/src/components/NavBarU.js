import React from 'react'
import { Link } from "gatsby"
import { SidebarData } from "./SidebarData"
import { useAuth0 } from "@auth0/auth0-react"
import {Container, Navbar} from 'react-bootstrap'

import "./Navbar.css"



export const NavbarU = (props) => {

    const { loginWithRedirect, logout,  user, isAuthenticated, isLoading } = useAuth0()

    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            
            </Container>
            </Navbar>

            
        </>
    )
}




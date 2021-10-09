/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Auth0Provider } from "@auth0/auth0-react"
import NavBar from "./NavBar"
// import NavBarU from './NavbarU'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Auth0Provider
        domain="dev-6fm6c6lp.us.auth0.com"
        clientId="I2JfAEzv7qVdciUa9yyqPp1epE4WexCx"
        redirectUri={window.location.origin}
      >
        <NavBar siteTitle={data.site.siteMetadata?.title || `Title`} />
        {/* <NavBarU /> */}

        <main>{children}</main>

        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </Auth0Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

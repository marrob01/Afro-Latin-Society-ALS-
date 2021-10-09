import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Contact from './contact-page'

class ContactPage extends React.Component {
  render() {
   
    return (
        <Layout >
        <Seo title="Contact Page"/>

        <Contact />

        </Layout>
    )
      
  }
}

export default ContactPage
// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//   }
// `

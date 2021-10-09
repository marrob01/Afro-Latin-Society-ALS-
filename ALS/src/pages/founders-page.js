import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

class FoundersPage extends React.Component {
  render() {
    const { data } = this.props
    const pageTitle = data.site.siteMetadata.title
    const authorName = data.site.siteMetadata.author
    return (
      <Layout
        title={pageTitle}
        subtitle="About Afro Latin Society"
        authorName={authorName}
      >
        <Seo title="Founders Page" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default FoundersPage
export const FoundersPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

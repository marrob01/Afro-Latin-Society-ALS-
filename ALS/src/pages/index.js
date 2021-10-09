import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

class HomePage extends React.Component {
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
        <Seo title="Home Page" />
        <h1>Hi people</h1>

        <p>
          <Link to="/founders-page/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p>
      </Layout>
    )
  }
}

export default HomePage
export const homePageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

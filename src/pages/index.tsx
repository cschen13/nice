import { graphql, Link } from "gatsby"
import * as React from "react"
import Container from "../components/Container"
import MarkdownData from "../types/MarkdownNode"

type AllMarkdownNode = {
  node: MarkdownData
}

interface IHomeProps {
  data: {
    allMarkdownRemark: {
      edges: AllMarkdownNode[]
    }
  }
}

const Home: React.FC<IHomeProps> = ({ data }) => {
  return (
    <Container>
      <h2>Posts</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Container>
  )
}

export const postsQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Home

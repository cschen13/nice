import { graphql, Link } from "gatsby"
import * as React from "react"
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
    <main>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h1>{node.frontmatter.title}</h1>
            <h2>
              <time>{node.frontmatter.date}</time>
            </h2>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </main>
  )
}

export const postsQuery = graphql`
  {
    allMarkdownRemark {
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

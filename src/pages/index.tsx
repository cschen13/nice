import { graphql } from "gatsby"
import * as React from "react"

interface IHomeProps {
  data: {
    allMarkdownRemark: {
      edges: IMarkdownEdge[]
    }
  }
}

interface IMarkdownEdge {
  node: {
    excerpt: string
    frontmatter: {
      date: string
      title: string
    }
  }
}

const Home: React.FC<IHomeProps> = ({ data }) => {
  return (
    <main>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div>
          <h1>{node.frontmatter.title}</h1>
          <h2>
            <time>{node.frontmatter.date}</time>
          </h2>
          <p>{node.excerpt}</p>
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
          excerpt
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`

export default Home

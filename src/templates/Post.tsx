import { graphql } from "gatsby"
import * as React from "react"
import Container from "../components/Container"
import MarkdownNode from "../types/MarkdownNode"

interface IPostProps {
  data: {
    markdownRemark: MarkdownNode
  }
}

const Post: React.FC<IPostProps> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Container>
      <h2>{frontmatter.title}</h2>
      <h3>
        <time>{frontmatter.date}</time>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  )
}

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`

export default Post

type MarkdownNode = {
  id: string
  excerpt: string
  frontmatter: {
    date: string
    title: string
  }
  fields: {
    slug: string
  }
  html: string
}

export default MarkdownNode

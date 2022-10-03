import * as React from "react"
import { Link, HeadFC } from "gatsby"
import Template from "../templates/template"

const pageStyles = {
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
  <Template type="?">
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <br />
        <Link to="/">Go home</Link>
      </p>
    </main>
  </Template>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>

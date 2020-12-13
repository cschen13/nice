import * as React from "react"
import { Link } from "gatsby"
import styles from "./Container.module.css"

export default function Container({ children }) {
  return (
    <div className={`container ${styles.container}`}>
      <header>
        <h1>
          <Link to="/">Chris Chen</Link>
        </h1>
        <address>e: hello (at) chris chen dot me</address>
      </header>
      <main>{children}</main>
    </div>
  )
}

import { Link, useStaticQuery } from 'gatsby'
import React from 'react'
import { graphql } from 'gatsby'

export default function Navbar() {
    const data = useStaticQuery(graphql`
    query Site {
        site {
          siteMetadata {
            title
          }
        }
      }      
    `)
    const {title} = data.site.siteMetadata

    return (
        <nav>
            <h1>{title}</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    )
}

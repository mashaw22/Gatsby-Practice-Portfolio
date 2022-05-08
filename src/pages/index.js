import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import {header, btn} from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Develop</h2>
          <h3>Design & Technology</h3>
          <p>UX designer based in Texas.</p>
          <Link to="/projects" className={btn}>My Portfolio</Link>
        </div>
      </section>
    </Layout>
  )
}

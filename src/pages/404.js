import React from 'react'
import { SEO } from '../components/seo'

export default function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>Sorry page not found</p>
    </div>
  )
}

export const Head = () => (
  <SEO title="Robert Walker • 404" />
)

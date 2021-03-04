import React from 'react'
import Link from './Link'

export default function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item" children="Accordion">
      </Link>
      <Link href="/list" className="item" children ="Search">
      </Link>
      <Link href="/dropdown" className="item" children="Dropdown">
      </Link>
      <Link href="/translate" className="item" children="Translate">
      </Link>
    </div>
  )
}

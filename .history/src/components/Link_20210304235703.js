import React from 'react'

export default function Link({href,className,children}) {

  const onClick=(event)=>{
    event.preventDefault()
  }

  return (
    <a onClick={onClick} className={className} href={href}>{children}</a>
  )
}

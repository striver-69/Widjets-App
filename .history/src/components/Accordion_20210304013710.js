import React from 'react'

export default function Accordion({items}) {
  const rendereditems=items.map((item)=>{
    return <React.Fragment key={item.title}>
      <div className="title active">
        <i className="dropdown active"></i>
        {item.title}
      </div>
      <div className="content active">
        <p>{item.content}</p>
      </div>
    </React.Fragment>
  })
  return (
    <div className="ui styled accordion">
      {rendereditems}
    </div>
  )
}

import React from 'react'

export default function Accordion({items}) {

  const onTitleClick=(index)=>{
    console.log('title clicked',index)
  }

  const rendereditems=items.map((item,index)=>{
    return <React.Fragment key={item.title}>
      <div className="title active" 
      onClick={()=>onTitleClick}>
        <i className="dropdown icon"></i>
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

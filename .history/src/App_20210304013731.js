import React from 'react'
import Accordion from './components/Accordion'

const items=[
  {
    title:'What is react ?',
    content:'React is a frontend javascript framework'
  },
  {
    title:'Why use React?',
    content:'React is a favourite javascript framework among engineers'
  },
  {
    title:'How do you use react',
    content:'You use React by creating components'
  }
]

export default ()=>{
  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}


import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'

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

const options=[
  {
    label:'the color red',
    value:'red'
  },
  {
    label:'the color green',
    value:'green'
  },
  {
    label:'A shade of blue',
    value:'blue'
  }
]

export default ()=>{
  return (
    <div>
      <Translate/>
    </div>
  )
}


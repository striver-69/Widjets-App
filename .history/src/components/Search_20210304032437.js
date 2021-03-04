import React,{useState,useEffect} from 'react'

export default function Search() {
  const [term,setTerm]=useState('')
  console.log('I run with every rerender')
  useEffect(() => {
    console.log('I only run once')
  }, [])

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search term</label>
          <input value={term} onChange={e=>setTerm(e.target.value)} className="input"/>
        </div>
      </div>
    </div>
  )
}
 
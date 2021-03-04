import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Search() {
  const [term,setTerm]=useState('programming')
  const [results,setResults]=useState([])

  console.log(results)
  
  useEffect(() => {
    const search=async()=>{
      const {data}=await axios.get('https://en.wikipedia.org/w/api.php',{
        params:{
          action:'query',
          list:'search',
          origin:'*',
          format:'json',
          srsearch:term
        }
      })
      if(search)
        setResults(data.query.search)

    }
    search()
  }, [term])

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
 
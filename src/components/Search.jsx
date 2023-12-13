import React, { useState } from 'react'
import "../css/Search.css"
import {MdSearch} from 'react-icons/md';
import { useGlobalContext } from '../hooks/useGlobalContext';

const Search = () => {
     const [text, setTest] = useState('')
     const {error, requests, isLoading, searchUser} = useGlobalContext()

     const handleSubmit = (e)=>{
        e.preventDefault()
        searchUser(text)
     }



  return (
   <section className='section'>
     <div className="section-center search-card">
        {error.show && <div className="error-wrapper"><p>{error.msg}</p></div> }
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <MdSearch/>
                <input type='text' value={text} onChange={(e)=> setTest(e.target.value)} placeholder='Enter Github user'/>
                {requests > 0 && !isLoading && <button  type='submit'>Search</button> }
                
            </div>
        </form>
        <h3 className="reg">Requests: {`${requests}`} / 60</h3>
     </div>
   </section>
  )
}

export default Search
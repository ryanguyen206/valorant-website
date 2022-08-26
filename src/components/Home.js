import React, {useState} from 'react'
import Navbar from './Navbar'

const Home = () => {
  const [search, setSearch] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='homeContainer'>
    <h1>Search anything you would like to know more about!</h1>
    <form onSubmit={handleSubmit}>
    <input 
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className='searchInput'
    />
    <button>Search</button>
    </form>
   
    </div>
  )


}

export default Home
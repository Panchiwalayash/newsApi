import React from 'react'
import Navbar from '../Navbar'
import NewSection from '../NewSection/NewSection'
import './home.css'

const Home = ({user}) => {
  return (
    <div>
      <Navbar/>
      <NewSection user={user}/>
    </div>
  )
}

export default Home
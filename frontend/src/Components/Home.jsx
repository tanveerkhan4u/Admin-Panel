import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = ({Toggle}) => {
  return (
    <div >
      <Navbar  Toggle={Toggle}/>
    </div>
     
  )
}

export default Home

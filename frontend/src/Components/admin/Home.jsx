import React from 'react'
import Navbar from './Navbar'
import { Link, useOutlet } from 'react-router-dom'

const Home = () => {
  const outlet = useOutlet();
  const { Toggle } = outlet.props;
  return (
    <div >
      <Navbar  Toggle={Toggle}/>
    </div>
     
  )
}

export default Home

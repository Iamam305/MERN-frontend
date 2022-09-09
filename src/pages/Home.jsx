import React from 'react'
import CreateNotes from '../components/CreateNotes'
import Navbar from '../components/Navbar'
import Login from './auth/Login'
import Register from './auth/Register'

const Home = () => {
  return (
    <div>
      <Navbar/>
      {/* <Login/> */}
      {/* <Register/> */}
      <CreateNotes/>
    </div>
  )
}

export default Home
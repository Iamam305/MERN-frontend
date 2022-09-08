import React from 'react'
import CreateNotes from '../components/CreateNotes'
import Login from './auth/Login'
import Register from './auth/Register'

const Home = () => {
  return (
    <div>Home
      {/* <Login/> */}
      {/* <Register/> */}
      <CreateNotes/>
    </div>
  )
}

export default Home
import React from 'react'
import Nav from './nav/Nav'
import Profile from './profile/Profile'
import Overview from './overview/Overview'

const Home = () => {
  return (
    <div className='bg-black'>
        <Nav />
        <Profile />
        <Overview />
    </div>
  )
}

export default Home
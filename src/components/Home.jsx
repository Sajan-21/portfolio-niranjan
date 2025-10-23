import React from 'react'
import Nav from './nav/Nav'
import Profile from './profile/Profile'
import Overview from './overview/Overview'
import Certifications from './certifications/Certifications'
import Awards from './awards/Awards'
import Educations from './education/Educations'
import Contact from './contact/Contact'

const Home = () => {
  return (
    <div className='bg-black'>
        <Nav />
        <Profile />
        <Overview />
        <div className='flex justify-center text-white divide-x divide-yellow-950 p-10'>
          <Certifications />
          <Awards />
        </div>
        <Educations />
        <Contact />
    </div>
  )
}

export default Home
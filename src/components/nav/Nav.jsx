import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    const navItems = [
        {
            item: "HOME",
            to: "/",
        },
        {
            item: "SERVICES",
            to: "/services",
        },
        {
            item: "CONTACTS",
            to: "/contacts",
        }
    ]

  return (
    <div className='text-center bg-yellow-950 p-6 space-x-20 kanit text-xl'>
        {navItems.map((item) => (
            <NavLink className="text-white" to={item.to}>{item.item}</NavLink>
        ))}
    </div>
  )
}

export default Nav
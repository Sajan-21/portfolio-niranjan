import React from 'react'

const SkillRatings = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white p-10'>
        <h1 className='text-2xl'>SKILLS</h1>
        <ul className='space-y-5 w-1/2'>
            <li>PPC<div className='border border-white h-3' ><div className='h-full w-full bg-blue-800'></div></div></li>
            <li>SMM<div className='border border-white h-3' ><div className='h-full w-full bg-blue-800'></div></div></li>
            <li>SEO<div className='border border-white h-3' ><div className='h-full w-full bg-blue-800'></div></div></li>
            <li>Strategy<div className='border border-white h-3' ><div className='h-full w-full bg-blue-800'></div></div></li>
            <li>Trainging<div className='border border-white h-3' ><div className='h-full w-full bg-blue-800'></div></div></li>
            <li>Email<div className='border border-white h-3' ><div className='h-full w-4/5 bg-blue-400'></div></div></li>
        </ul>
    </div>
  )
}

export default SkillRatings
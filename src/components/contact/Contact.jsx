import React from 'react'

const Contact = () => {
  return (
    <div className='text-white flex space-y-5 p-10 bg-yellow-950 justify-evenly items-center'>
        
        <form className='bg-black text-center space-y-5 p-10 rounded-2xl shadow-2xl shadow-black w-1/2'>
            <h1>GET IN TOUCH</h1>
            <div className='flex flex-col items-start'>
                {/* <label>Name</label> */}
                <input type="text" className='outline-0 bg-gray-800 p-2 rounded w-full ' placeholder='Name' />
            </div>
            <div className='flex flex-col items-start'>
                {/* <label>Email</label> */}
                <input type="text" className='outline-0 bg-gray-800 p-2 rounded w-full ' placeholder='Email' />
            </div>
            <div className='flex flex-col items-start'>
                {/* <label>Phone</label> */}
                <input type="text" className='outline-0 bg-gray-800 p-2 rounded w-full ' placeholder='Phone' />
            </div>
            <div className='flex flex-col items-start'>
                {/* <label>Message</label> */}
                <textarea className='outline-0 bg-gray-800 p-2 rounded w-full h-30' placeholder='Enter your message'></textarea>
            </div>
            <div className='text-center'>
                <button type="submit" className='hover:bg-gray-700 bg-gray-800 px-4 py-2 hover:cursor-pointer rounded'>Submit</button>
            </div>
        </form>

        <div className='space-y-5 p-10'>
            <h1 className='text-2xl'>My Contact Details</h1>
            <div className='space-y-2'>
                <h1>Email</h1>
                <p className='text-gray-400'>nirans666@gmail.com</p>
            </div>
            <div className='space-y-2'>
                <h1>Phone</h1>
                <p className='text-gray-400'>+91 9495601359 / +91 7012716981</p>
                <p className='text-gray-400'>Thrissur, Kerala</p>
            </div>
        </div>

    </div>
  )
}

export default Contact
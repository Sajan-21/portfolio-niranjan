import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div>
      {/* Main Contact Section */}
      <div className="text-white flex flex-col md:flex-row md:p-10 bg-yellow-950 justify-center items-center  md:space-y-0">
        
        {/* Contact Form */}
        {/* <form className="bg-black text-center space-y-5 p-6 md:p-10 rounded-2xl shadow-2xl shadow-black w-full md:w-1/2">
          <h1 className="text-xl md:text-2xl font-semibold">GET IN TOUCH</h1>
          
          <div className="flex flex-col items-start">
            <input
              type="text"
              className="outline-0 bg-gray-800 p-2 rounded w-full"
              placeholder="Name"
            />
          </div>
          
          <div className="flex flex-col items-start">
            <input
              type="text"
              className="outline-0 bg-gray-800 p-2 rounded w-full"
              placeholder="Email"
            />
          </div>
          
          <div className="flex flex-col items-start">
            <input
              type="text"
              className="outline-0 bg-gray-800 p-2 rounded w-full"
              placeholder="Phone"
            />
          </div>
          
          <div className="flex flex-col items-start">
            <textarea
              className="outline-0 bg-gray-800 p-2 rounded w-full h-28"
              placeholder="Enter your message"
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="hover:bg-gray-700 bg-gray-800 px-4 py-2 hover:cursor-pointer rounded"
            >
              Submit
            </button>
          </div>
        </form> */}

        {/* Contact Details */}
        <div className="space-y-5 p-4 md:p-10 text-center md:text-left w-full md:w-auto">
          <h1 className="text-2xl font-semibold">My Contact Details</h1>
          <div className="space-y-2">
            <h1>Email</h1>
            <p className="text-gray-400">nirans666@gmail.com</p>
          </div>
          <div className="space-y-2">
            <h1>Phone</h1>
            <p className="text-gray-400">+91 9495601359 / +91 7012716981</p>
            <p className="text-gray-400">Thrissur, Kerala</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="flex justify-center space-x-10 md:space-x-24 p-5 bg-black text-gray-600">
        <a href="https://www.instagram.com/the_unknown._.man/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-pink-800" />
        </a>
        <a href="https://www.linkedin.com/in/niranjan-s-143b66125/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:text-blue-500" />
        </a>
        <a href="mailto:nirans666@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="hover:text-yellow-400" />
        </a>
      </footer>
    </div>
  );
};

export default Contact;

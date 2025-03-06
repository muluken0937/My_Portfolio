// import { Link } from 'react-router-dom';
// import './Navbar.css'
// function Navbar() {
//   return (
//     <nav className="bg-blue-600 text-white py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">My Portfolio</h1>
//         <div className="space-x-6">
//           <Link to="/" className="hover:text-gray-300">Home</Link>
//           <Link to="/about" className="hover:text-gray-300">About</Link>
//           <Link to="/projects" className="hover:text-gray-300">Projects</Link>
//           <Link to="/contact" className="hover:text-gray-300">Contact</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='mulex' style={{ width: '100px', height: 'auto' }} />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
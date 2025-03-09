// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col font-sans bg-gray-100 text-gray-900">
//         <Navbar />
//         <div className="flex-grow p-4">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
    </div>
  )
}

export default App
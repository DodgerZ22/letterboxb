import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Entries from './pages/Entries'
import Signup from './pages/Signup'



function App() {
  let component
  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break
    case '/about':
      component = <About />
      break
    case '/entries':
      component = <Entries />
      break
    case '/signup':
      component = <Signup />
      break
  }
  return (
    <>
    <Navbar />
    {component}
    </>
  );
}

export default App;

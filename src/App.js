import React from 'react';
import NavbarElement from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home'


function App() {
  return (
    <div>
     <NavbarElement />
     <Home />
    </div>
  );
}

export default App;

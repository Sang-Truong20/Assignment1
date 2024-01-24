import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Player from './Components/Player';
import Detail from './Components/Detail';
import Contact from './Components/Contact';
import About from './Components/About';



const App = () => {
  return (
    <div className='App'>
    <div>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Player/>}> 
      </Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
    </div>
  )
}

export default App

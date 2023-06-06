import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import SkillsExp from './pages/SkillsExp';

import React from 'react';
import './index.css'

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/contact' element={<ContactMe />}/>
      <Route path='/about' element={<AboutMe />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/skills' element={<SkillsExp />}/>

    </Routes>
  </>
  );
}

export default App;

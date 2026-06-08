import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student1 from './assets/component01/Student1'
import Student from './assets/component01/Student'
import Welcome from './assets/component01/props/Welcome'

function App() {
  return ( <div>
    <Student/>
    <Student1/>
    <Welcome name ="Nithra"
     course="java" 
     duration={18}
     
     
     />

    

  </div>
  
  )        
}

export default App

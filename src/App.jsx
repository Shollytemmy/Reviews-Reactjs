import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Reviews } from './Componets/Reviews'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <header className="header">
        <h1 className='reviews-text'>our reviews</h1>
      <div className="underline"></div>
      </header>
      
    
      <Reviews />
    </div>
  )
}

export default App

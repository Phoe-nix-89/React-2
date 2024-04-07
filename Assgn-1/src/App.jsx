import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card';

function App() {
  const [t,setT] = useState(<div></div>)

  return (
    <>
      <Card target={t} />
    </>
  )
}

export default App

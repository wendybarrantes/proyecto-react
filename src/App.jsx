import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioInicio from './componetes/FormularioInicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <FormularioInicio/>   
   
   </>
  )
}

export default App

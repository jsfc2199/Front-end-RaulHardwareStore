import { useState } from 'react'
import './App.css'
import ProviderList from './components/provider/ProviderList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Hola
      <ProviderList/>
    </div>
  )
}

export default App

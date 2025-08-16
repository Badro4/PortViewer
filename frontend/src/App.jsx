import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScanBox from './components/ScanBox';
import Dog from './components/Dog';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScanBox/>
      <Dog/>
    </>
  )
}

export default App

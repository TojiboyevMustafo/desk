import { useState } from 'react'
import './App.css'
import Start from './components/Start'
import Photos from './components/Photos'
import About from './components/About'
import Word from './components/Word'
import Receipt from './components/Receipt'
import Media from './components/Media'
import Explanation from './components/Explanation'
import Trade from './components/Trade'
import Showcase from './components/Showcase'
import Data from './components/Data'
import Run from './components/Run'
import Content from './components/Content'
import Final from './components/Final'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Start />
      <Photos />
      <About />
      <Word />
      <Receipt />
      <Media />
      <Explanation />
      <Trade />
      <Showcase />
      <Data />
      <Run />
      <Content />
      <Final />
    </>
  )
}

export default App

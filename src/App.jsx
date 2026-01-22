import './App.css'

import {Welcome} from './Welcome'
import {Button} from './Button'
import { Hello, HelloWithoutJSX} from './Hello'

function App() {
  
  return (
    <div>
      <Hello /> 
      <HelloWithoutJSX />
      <Welcome />
      <Button /> 
    </div>
  )
}

export default App

import './App.css'

import {Welcome} from './Welcome'
import {Button} from './Button'
import { Hello, HelloWithoutJSX} from './Hello'
import { UserProfile } from './UserProfile'
import { ContactForm } from './ContactForm'
import { StyledForm } from './StyledForm'

function App() {
  
  return (
    <div>
      <StyledForm /> 
      <ContactForm />
      <UserProfile />
      <Hello /> 
      <HelloWithoutJSX />
      <Welcome />
      <Button /> 
    </div>
  )
}

export default App

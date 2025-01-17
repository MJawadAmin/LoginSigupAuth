import { useState } from 'react'

import './index.css'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginForm/>
    <SignupForm/>
    </>
  )
}

export default App

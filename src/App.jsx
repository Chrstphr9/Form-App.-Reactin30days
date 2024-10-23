import { useRef, useState } from 'react'
import './App.css'
import FormInput from "./components/FormInput"

const App = () => {
  // const [username, setUsername] = useState("")
  const usernameRef = useRef()

  console.log(usernameRef);

  const handleSubmit = (e) => {

  }
  
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput refer={usernameRef  } placeholder="Username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
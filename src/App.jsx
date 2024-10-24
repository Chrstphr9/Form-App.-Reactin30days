import { useRef, useState } from 'react'
import './App.css'
import FormInput from "./components/FormInput"

const App = () => {
  const [value, setValue] = useState({
    username:"",
    email:"",
    birthday:"",
    passowrd:"",
    confirmPassword:""
  });

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"username",
      label:"username"
    },
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"username",
      label:"username"
    },
    {
      id:1,
      name:"birthday",
      type:"text",
      placeholder:"birthday",
      label:"birthday"
    },
    {
      id:1,
      name:"password",
      type:"text",
      placeholder:"passowrd",
      label:"password"
    },
    {
      id:1,
      name:"confirmPassword",
      type:"text",
      placeholder:"confirmPassword",
      label:"confirmPassword"
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput name="username" placeholder="Username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
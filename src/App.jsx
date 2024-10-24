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
      id:2,
      name:"username",
      type:"text",
      placeholder:"username",
      label:"username"
    },
    {
      id:3,
      name:"birthday",
      type:"text",
      placeholder:"birthday",
      label:"birthday"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Passowrd",
      label:"Password"
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      label:"Confirm Password"
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
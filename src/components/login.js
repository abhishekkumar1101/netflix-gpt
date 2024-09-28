import React, { useRef, useState } from 'react'
import Header from './header'
import { checkValidateData } from '../utils/validate';
import { Bg_URL } from '../utils/constants';

const Login = () => {
  
  const [isSignForm,setIsSignInForm] = useState(true);
  const [errormessage,setErrorMessage]  = useState(null);
 const togglesignInForm = ()=>{
        setIsSignInForm(!isSignForm)
        
 }

 const email = useRef(null);
 const password = useRef(null);
 const handleClickButton = ()=>{
 const message = checkValidateData(email.current.value,password.current.value);
 console.log(message);
 setErrorMessage(message);
  //console.log(email.current.value);
  //console.log(password.current.value);
 }

  return (
    <div>
      <Header />
      <div className= "absolute">
    
    <img src = {Bg_URL} alt = "logo" />
      </div>
        <form onSubmit={(e)=>{e.preventDefault()}} className= " absolute my-32 bg-black w-3/12 mx-auto right-0 left-0 p-12 text-white h-6/12 bg-opacity-80" >
        <div >
        <h1 className="text-3xl m-8  font-semibold">{isSignForm?"Sign In" : "Sign Up"}</h1>
        {!isSignForm && <input type = "text" placeholder="Enter Your Name" className="my-2 p-2 w-full bg-gray-600" />}
        <input ref = {email} type = "text" placeholder="Enter Your Email" className="my-2 p-2 w-full bg-gray-600" />
        <input ref = {password} type = "password" placeholder="Enter Your password" className="my-2 p-2 w-full bg-gray-600"  />
        <p className="text-red-500 py-2">{errormessage}</p>
        <button  className="p-4 my-4 bg-red-700 w-full" onClick={handleClickButton} >{!isSignForm?"Sign In" : "Sign Up"}</button>
        </div>

        <h1 className="my-4 p-4 cursor-pointer" onClick={togglesignInForm}> {isSignForm?"New on NetFlix? Create An Account" : " Already A User. Sign In"} </h1>
        </form>
  
  

    </div>
  )
}

export default Login;

import React, { useContext, useState } from 'react'
import axios from "axios"
import './LoginPopup.css'
import { img } from '../../assets/assets'
import { StoreContext } from '../Context/StoreContext'
const LoginPopup = ({setShowLogin}) => {

     const {url,setToken}=useContext(StoreContext)

    const [currState,setCurrState]=useState("Login")
     const [data,setData]=useState({
      name:"",
      email:"",
      password:""
     })

     const onChangeHandler=(event)=>{
      const {name,value}=event.target;
      setData(data=>({...data,[name]:value}))
     }

   const onLogin=async(event)=>{
       event.preventDefault();
       let newUrl=url;
       if(currState=="Login"){
        newUrl+="/api/user/login"
       }else{
        newUrl+="/api/user/register"
       }
       const response= await axios.post(newUrl,data);

       if(response.data.success){
           setToken(response.data.token)
           localStorage.setItem("token",response.data.token)
           setShowLogin(false)
       }else{
        alert(response.data.message)
        
       }
   }

  return (
    <div className='login-popup'>
      <form onSubmit={(e)=>onLogin(e)} className="login-popup-container rounded-3">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={img.greenAddIcon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>: <input onChange={onChangeHandler} value={data.name} name='name' type="text" placeholder='Your Name' required />}
            <input onChange={onChangeHandler} value={data.email} name='email' type="email" placeholder='Your email' required />
            <input name='password' onChange={onChangeHandler} value={data.password}  type="password" placeholder='password' required />
        </div>
        <button type='submit' className='rounded-1' >{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By contuning i agree to the terms and conditions </p>
        </div>
        {currState==="Login"
        ?<p>Create a New Account? <span  onClick={()=>setCurrState("Sign Up")} >Click here</span></p>
        :<p>Alerady have an account? <span onClick={()=>setCurrState("Login")} >Login here</span></p>
    }
        
        
      </form>
    </div>
  )
}

export default LoginPopup

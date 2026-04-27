import { useState,useContext} from "react";
import {useHistory,Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import DevContext from '../../context/DevContext'
import './index.css'

const Login =(props)=>{
    const [loginmail,setLoginMail]=useState('')
    const [loginpassword,setLoginPassword]=useState('')
    const [showpassword,setShowpassword]=useState(false)
    const [error,setError]=useState('')
    const {onGetprofile}=useContext(DevContext)

    const onGiveMail=(event)=>{
        setLoginMail(event.target.value)
    }

    const onGivePassword=(event)=>{
        setLoginPassword(event.target.value)
    }

    const onclickcheckbox=()=>{
        setShowpassword(prev => !prev)
    }

    

    const history = useHistory()


     const token = Cookies.get("jwt_token")

    if (token !== undefined) {
        return <Redirect to="/" />
    }

    const onLoginsuccess=(data)=>{
        Cookies.set("jwt_token",data.token,{expires : 30})
        Cookies.set("user_id", data.id,{expires : 30})
        onGetprofile(data.id)
        history.push("/")

    }

    const onLoginfailure=(error)=>{
        console.log(error)
        setError(error)
    }


    const onLogin=async(event)=>{
        event.preventDefault()

        const userlogindetails = {
            email : loginmail,
            password : loginpassword
        }

        const url="http://localhost:3000/devconnect/login"
        const options = {
            method:"POST",
            headers : {
                "Content-Type":"application/json"
            },

            body:JSON.stringify(userlogindetails)
        }

        const response = await fetch(url,options)
        const data = await response.json()
        if (response.ok){
            onLoginsuccess(data)
        }else{
            onLoginfailure(data.error)
        }
    }

    const onGotoRegisteration=()=>{
        const{history}=props 
        history.replace('/register')

    }

    return(



        <div className="Login-Container">
            <form className='login-form' onSubmit={onLogin}>
                <h1 className="login-heading">Login</h1>
                <div  className='input-alignment'>
                   <IoMdMail className="registers-icon"/>
                   <input type="text"  className='register-input' placeholder="mail" value={loginmail} onChange={onGiveMail} />
                </div>
                <div  className='input-alignment'>
                    <FaLock className="registers-icon"/>
                    <input type={showpassword ? "text" : "password"}  className='register-input' placeholder="password" value={loginpassword} onChange={onGivePassword} />
                </div>
                 <div className="showpassword">
                    <input type="checkbox" id="Showpassword" onChange={onclickcheckbox} />
                    <label htmlFor="Showpassword">show password</label>
                </div>
               <div className="button-card">
                 <button type="submit" className='login-button'>login</button>
                <button type="button" className='login-button' onClick={onGotoRegisteration}>Register</button>
               </div>
               <p>{error}</p>
            </form>

        </div>
    )

}

export default Login 

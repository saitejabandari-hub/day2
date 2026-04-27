import {useState} from 'react'
import { IoPerson } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import './index.css'

const Register =(props)=>{
    const [username,setUserName]=useState('')
    const [mail,setMail]=useState('')
    const [password,setPassword]=useState('')
    const [showpassword,setShowpassword]=useState(false)

    const onChangeName=(event)=>{
        setUserName(event.target.value)

    }
    const onChangeMail=(event)=>{
        setMail(event.target.value)

    }
    const onChangePassword=(event)=>{
        setPassword(event.target.value)

    }

    const  onSuccessfulRegister=()=>{
        const {history}=props 
        history.replace('/login')
        }
    
    const onRegister=async(event)=>{
        event.preventDefault()

        const userdetails = {
            name : username,
            email : mail,
            password : password
        }

        const url = "http://localhost:3000/devconnect/register"

    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(userdetails)
    }

    const response = await fetch(url,options) 
    const data = await response.text()
   if(response.ok){
    setMail('')
    setPassword('')
    setUserName('')
    onSuccessfulRegister()
   }

    }

     const onclickcheckbox=()=>{
       setShowpassword(prev => !prev)
    }


    return(
        <div className="register-Container">

            <form className='register-form-element' onSubmit={onRegister} >
                <h1 className='register-heading'>Register</h1>
                <div className='input-alignment'>
                   <IoPerson className="registers-icon"/>
                    <input type="text" className='register-input' placeholder="name" value={username} onChange={onChangeName} />
                </div>
                <div  className='input-alignment'>
                    <IoMdMail className="registers-icon"/>
                    <input type="text"  className='register-input' placeholder="mail" value={mail} onChange={onChangeMail} />
                </div>
                <div  className='input-alignment'>
                    <FaLock className="registers-icon"/>
                    <input type={showpassword ? "text" : "password"}  className='register-input' placeholder="password" value={password} onChange={onChangePassword} />
                </div>
                <div className="showpassword">
                    <input type="checkbox" id="Show" onChange={onclickcheckbox} />
                    <label htmlFor="Show">show password</label>
                </div>

                <button type="submit" className='register-button'>Register</button>

            </form>

        </div>
    )

}

export default Register
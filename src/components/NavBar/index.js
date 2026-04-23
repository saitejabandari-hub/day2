import {Link,withRouter,} from 'react-router-dom'
import {useState, useEffect,useContext } from 'react'
import Cookies from 'js-cookie'
import DevContext from '../../context/DevContext'

import './index.css'

const NavBar =(props) =>{
    const [admin,setAdmin] = useState({name:'',email:''})
    const {onSearchedByInput} = props
    
    const onSearchforPost =(event) =>{
        onSearchedByInput(event.target.value)
    }

    const jwtuser = Cookies.get("user_id")

    const onClickLogout=()=>{
        Cookies.remove("user_id")
        Cookies.remove("jwt_token")
       const{history}=props
       history.replace("/login")
    }

    useEffect(()=>{
            const fetchprofile = async () =>{
                 const jwt = Cookies.get("jwt_token")
    
            const url = `http://localhost:3000/devconnect/profile/${jwtuser}`
            const options = {
                method:"GET",
                headers : {
                    "Content_Type":"application/json",
                    Authorization: `Bearer ${jwt}`
                }
    
            }
    
            const response = await fetch(url,options)
            const data = await response.json()
            if(response.ok){
            const adminDetails = {
                name:data.name,
                email:data.email
            }
            setAdmin(adminDetails)
    
            }
    
            }
    
            fetchprofile()
    
           },[])
    
    return(

    <nav className="nav-container">

        <h1 className='nav-heading'>DevConnect</h1>

        <input type="search" placeholder="Search Posts...." className='nav-search' onChange={onSearchforPost}  />
        <div className='nav-profile-card'>
            <Link to="/profile">
        <div className='user-card'>
        <img src="https://www.gravatar.com/avatar/?d=mp&s=128" alt="profile" className='user-profile' />
        <h1 className='user-heading'>{admin.name}</h1>
        </div>
        </Link>
        <button type="button" className='nav-logout-button' onClick={onClickLogout} >Logout</button>
        </div>

    </nav>

)}


export default withRouter(NavBar)

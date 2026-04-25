import { useState,useContext,useEffect} from 'react'
import Cookies from 'js-cookie'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import PostCard from '../PostCard'
import Loadspinner from '../Loadspinner'
import DevContext from '../../context/DevContext'
import './index.css'

const Profile =(props) =>{
       const [load,setLoad]=useState(true)
       const [admin,setAdmin] = useState({name:'',email:''})
       const [usersposts,setUserspost]=useState([])
       const [likesposts,setLikesposts] = useState([])
       const {rerender}=useContext(DevContext)
       const jwt = Cookies.get("jwt_token")
        const jwtuser = Cookies.get("user_id")

       useEffect(()=>{
        
        const fetchprofile = async () =>{

        const url = `http://localhost:3000/devconnect/profile`
        const options = {
            method:"GET",
            headers : {
                "Content-Type":"application/json",
                Authorization: `Bearer ${jwt}`
            }

        }

        const response = await fetch(url,options)
        
        if(response.ok){
        const data = await response.json()
        const adminDetails = {
            name:data.name,
            email:data.email
        }
        setLoad(false)
        setAdmin(adminDetails)

        }

        }

        const usersownposts = async()=>{
            const url = "http://localhost:3000/devconnect/usersposts"
            const options = {
                method:"GET",
                headers:{
                    Authorization:`Bearer ${jwt}`
                }

            }

            const response = await fetch(url,options)
             const data = await response.json()
        const updateposts = data.posts.map(each => (
            {
            commentsCount : each.commentsCount,
            content : each.content,
            id: each.id,
            likesCount : each.likesCount,
            name : each.name,
            tag : each.tag,
            title : each.title,
            date:each.created_at,
            imgUrl:each.image_url,
            users:each.user_id
            }
        ))
        const likedpostdetails = data.likesusers
        setUserspost(updateposts)
        setLikesposts(likedpostdetails)

        }

        fetchprofile()
        usersownposts()

       },[rerender,jwt,jwtuser])

       const onEditprofile=()=>{
        const{history}=props 
        history.replace("/EditProfile")

       }

    return (
    <div className="profile-bgContainer">
        <NavBar/>
        <div className="profile-firstContainer">
            <Sidebar/>
            <div className="profile-secondContainer">
                <h1 className='profile-heading'>Profile</h1>
                {load ? <Loadspinner/> :<><div className='profile-details-container'>
                    <div className='profile-inner-card'>
                        <div className='profile-card'>
                        <p className='profile-profile'>S</p>
                        <div className='profile-text-card'>
                            <h1 className='profile-username'>{admin.name}</h1>
                            <p className='profile-user-email'>{admin.email}</p>
                            <p className='profile-user-about'>Full stack dev. Writes about React, Node & the modern web.</p>
                        </div>
                    </div>
                    </div>
                    <div className='profile-button-card'>
                        <button type="button" className='profile-button' onClick={onEditprofile}>Edit Profile</button>
                    </div>
                </div>
                <h1 className='profile-mypost-heading'>My Posts</h1>
                 {usersposts.length === 0 ? (<div className="empty-state">
                        <p className="empty-title">📭 No posts are posted yet</p>
                         <p className="empty-text">Go hurry up and staring posting 🛒</p>
                    </div>) : <ul className="profile-posts-list" >
                                {usersposts.map(each => (
                                    <li key={each.id}  className="post-item" ><PostCard  post={each} likesposts={likesposts} /></li>
                                ))}
                </ul>}</>}
            </div>
        </div>
    </div>

)}

export default Profile


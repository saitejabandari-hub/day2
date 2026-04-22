import { useState,useContext,useEffect} from 'react'
import Cookies from 'js-cookie'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import PostCard from '../PostCard'
import Loadspinner from '../Loadspinner'
import DevContext from '../../context/DevContext'
import './index.css'

const Profile =() =>{
       const {allposts,profile} = useContext(DevContext)
       const [load,setLoad]=useState(true)
       const [admin,setAdmin] = useState({name:'',email:''})

       useEffect(()=>{
        const fetchprofile = async () =>{
             const jwt = Cookies.get("jwt_token")

        const url = `http://localhost:3000/devconnect/profile/${profile}`
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
        setLoad(false)
        setAdmin(adminDetails)

        }

        }

        fetchprofile()

       },[profile])

    const filterdPost = allposts.filter(each => each.id === each.id)



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
                    <div className='profile-post-counts'>
                        <p className='profile-post-conts-details'> <span className='profile-post-conts-details-number-posts'>120</span > Posts</p>
                        <p className='profile-post-conts-details'> <span className='profile-post-conts-details-number-likes'>483</span> Like</p>
                        <p className='profile-post-conts-details'> <span className='profile-post-conts-details-number-saved'>86</span> Saved</p>
                    </div>
                    </div>
                    <div className='profile-button-card'>
                        <button type="button" className='profile-button'>Edit Profile</button>
                    </div>
                </div>
                <h1 className='profile-mypost-heading'>My Posts</h1>
                 {filterdPost.length === 0 ? (<div className="empty-state">
                        <p className="empty-title">📭 No posts are posted yet</p>
                         <p className="empty-text">Go hurry up and staring posting 🛒</p>
                    </div>) : <ul className="profile-posts-list" >
                                {filterdPost.map(each => (
                                    <li key={each.id}  className="post-item" ><PostCard  post={each} /></li>
                                ))}
                </ul>}</>}
            </div>
        </div>
    </div>

)}

export default Profile


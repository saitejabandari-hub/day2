import { useContext } from 'react'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import PostCard from '../PostCard'
import DevContext from '../../context/DevContext'
import './index.css'

const Profile =() =>{
       const {allposts} = useContext(DevContext)

    const filterdPost = allposts.filter(each => each.id === each.id)
    return (
    <div className="profile-bgContainer">
        <NavBar/>
        <div className="profile-firstContainer">
            <Sidebar/>
            <div className="profile-secondContainer">
                <h1 className='profile-heading'>Profile</h1>
                <div className='profile-details-container'>
                    <div className='profile-inner-card'>
                        <div className='profile-card'>
                        <p className='profile-profile'>S</p>
                        <div className='profile-text-card'>
                            <h1 className='profile-username'>@username</h1>
                            <p className='profile-user-email'>user@email.com</p>
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
                </ul>}
            </div>
        </div>
    </div>

)}

export default Profile


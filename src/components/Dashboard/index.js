import { useContext,useState,useEffect } from 'react';
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import { HiDocumentText } from 'react-icons/hi';  
import { FaHeart } from 'react-icons/fa';           
import { FaComment } from 'react-icons/fa';          
import { FaBookmark } from 'react-icons/fa'; 
import {FaRegCommentDots} from 'react-icons/fa'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import PostCard from '../PostCard'
import DevContext from '../../context/DevContext'

import './index.css'

const Dashboard =(props) =>{
    const {allposts,rerender} = useContext(DevContext) 
    const [usersposts,setUserspost]=useState([])
    const [likesposts,setLikesposts] = useState([])

     const jwt = Cookies.get("jwt_token")
     const jwtuser = Cookies.get("user_id")

     useEffect(()=>{
    
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
            usersownposts()
    
           },[rerender])


          

    const allTags = allposts.map(each => each.tag) // give all tags and tags are repeted if different posts has with same tags
    const fliteredtags = allTags.filter((item,index,all) => all.indexOf(item) === index) //give unique tags
    // const newwayFilteredtags = [...new Set(allTags)] // new way of only unique tags works for strings and number

    const onTaketoCreatePost =  () =>{
            const{history}=props
            history.replace("/create-post")
    }

    return (
    <div className="dashboard-bgContainer">
        <NavBar/>
        <div className='dashboard-firstContainer'>
            <Sidebar/>
            <div className='dashboard-secondContainer'>
                <h1 className='dashboard-heading'>Dashboard</h1>
                <ul className='dashboard-reaction-card' >
                    <li >
                        <button  className='deashboard-each-reaction-card'>
                            <h1 className='dashboard-each-reaction-heading'>Total Posts</h1>
                        <div className='dashboard-each-reaction-aligment'>
                            <p className='dashboard-each-reaction-counts'>180</p>
                            <p className='dashboard-each-reaction-posts-icon'><HiDocumentText/></p>
                        </div>
                        </button>
                    </li>
                     <li  >
                        <button  className='deashboard-each-reaction-card'>
                            <h1 className='dashboard-each-reaction-heading'>Total Likes</h1>
                        <div className='dashboard-each-reaction-aligment'>
                            <p className='dashboard-each-reaction-counts'>180</p>
                            <p className='dashboard-each-reaction-posts-icon'><FaHeart/></p>
                        </div></button>
                    </li>
                     <li  >
                        <button  className='deashboard-each-reaction-card'>
                            <h1 className='dashboard-each-reaction-heading'>Total Comments</h1>
                        <div className='dashboard-each-reaction-aligment'>
                            <p className='dashboard-each-reaction-counts'>180</p>
                            <p className='dashboard-each-reaction-posts-icon'><FaComment/></p>
                        </div></button>
                    </li>
                     <li  >
                       <button  className='deashboard-each-reaction-card'>
                         <h1 className='dashboard-each-reaction-heading'>Saved Posts</h1>
                        <div className='dashboard-each-reaction-aligment'>
                            <p className='dashboard-each-reaction-counts'>180</p>
                            <p className='dashboard-each-reaction-posts-icon'><FaBookmark/></p>
                        </div>
                       </button>
                    </li>

                </ul>
                <div className='dashboard-thredContainer'>
                    <div className='dashboard-recentposts'>
                         <div className='dashboard-recent-posts-card'><h1 className='dashboard-recent-posts-heading'>Your Recent Posts</h1></div>
                         <hr className='dashboard-horizontal'/>
                         <div className='dashboard-recent-posts' >
                            {usersposts.length === 0 ? (<div className="empty-state">
                        <p className="empty-title">📭 No posts yet</p>
                         <p className="empty-text">Start sharing your thoughts 🚀</p>
                         <button className="create-btn" onClick={onTaketoCreatePost} >+ Create Post</button>
                    </div>) : <ul className="posts-list" >
                                {usersposts.map(each => (
                                    <li key={each.id}  className="post-item" ><PostCard  post={each} likesposts={likesposts} /></li>
                                ))}
                        </ul>}
                         </div>
                    </div>
                    <div className='dashboard-populartags'>
                        <div className='dashboard-recent-posts-card'><h1 className='dashboard-recent-posts-heading'>Popular Tags</h1></div>
                        <hr className='dashboard-horizontal'/>
                        <ul className='dashboard-alltags' >
                            {fliteredtags.map(each => {
                                const variable = allposts.filter(item => item.tag === each)
                                return <li key={each} className='dashboard-each-tag'> <Link to={`/tag/${each}`}><button className='dashboard-each-tag-name'>#{each}</button></Link> <span className='dashboard-each-tag-length'>{variable.length} posts</span> </li>
                            } )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}

export default Dashboard
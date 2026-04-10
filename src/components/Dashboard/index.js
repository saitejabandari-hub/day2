import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { HiDocumentText } from 'react-icons/hi';  
import { FaHeart } from 'react-icons/fa';           
import { FaComment } from 'react-icons/fa';          
import { FaBookmark } from 'react-icons/fa'; 
import {FaRegCommentDots} from 'react-icons/fa'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import DevContext from '../../context/DevContext'

import './index.css'

const Dashboard =() =>{
    const {allposts,onAddingLike} = useContext(DevContext) 

    const onDashboardeachLike =(id) =>{
        onAddingLike(id)
    }

    const allTags = allposts.map(each => each.tag) // give all tags and tags are repeted if different posts has with same tags
    const fliteredtags = allTags.filter((item,index,all) => all.indexOf(item) === index) //give unique tags
    // const newwayFilteredtags = [...new Set(allTags)] // new way of only unique tags works for strings and number

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
                         <ul className='dashboard-recent-posts' >
                            {allposts.map(each => (
                                <li key={each.id} className='dashboard-recent-each-post' >
                                  <Link to={`/post/${each.id}`}> <img src={each.imgUrl} alt="recent post" className='dashboard-recent-post-image' /></Link>
                                    <div className='dashboard-recent-each-post-details' >
                                        <h1 className='dashboard-recent-each-post-details-title' >{each.title}</h1>
                                        <div className='dashboard-recent-each-post-details-date-likes-comment-card' >
                                            <p className='dashboard-recent-each-post-details-date'>{new Date(each.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                                            <div className='dashboard-recent-each-post-details-like-comment' >
                                                <p className={each.isLiked ? "dashboard-recent-each-post-details-liked" : "dashboard-recent-each-post-details-like" } onClick={()=>onDashboardeachLike(each.id)}><FaHeart/>{each.likes}</p>
                                                <p className='dashboard-recent-each-post-details-comment'><FaRegCommentDots/>{each.commentText.length}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                         </ul>
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
import{useContext,useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import DevContext from '../../context/DevContext'
import './index.css'

const PostDetails =(props)=>{
    const {allposts,addComment}=useContext(DevContext)
    const [postcomment,setPostComment] =useState('')
    const onGoback=()=>{
        const{history}=props
        history.replace("/")
    }

    const {match}=props 
    const {params} = match
    const {id}=params

    const particularPost = allposts.find(each => each.id === parseInt(id))

     const onEnteringComment=(event)=>{
        setPostComment(event.target.value)
    }

    const addPostComment =()=>{
        const comment = {
        id : uuidv4(),
        user:"Uchiha",
        text:postcomment,
        date: new Date(),
        imgUrl : "https://www.gravatar.com/avatar/?d=mp&s=128"
        }

        setPostComment('')

        addComment(particularPost.id,comment)

    }

    return (
    <div className='postdetails-bgContainer'>
        <NavBar/>
        <div className='postdetails-firstContainer'>
            <Sidebar/>
            <div className='postdetails-secondContainer' >
            <button className='backhome' onClick={onGoback} >Go Back Home</button>
            <div className='postdetails-section' >
                <div className='postdetails-card' >
                    <h1 className='postdetails-heading'>{particularPost.title}</h1>
                    <div className='postbytimecard' >
                        <p className='byusername'>By <span className='name'>{particularPost.user}</span></p>
                        <p className='postdate'>{particularPost.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                        <p className='name'>#{particularPost.tag}</p>
                    </div>
                    <img src={particularPost.imgUrl} alt="No Image" className='post-image' />
                    <p className='postdetails-content' >{particularPost.content}</p>
                </div >
                 <div className='postdetails-other-container'>
                    <div className='postdetails-tag-card'>
                        <h1 className='postdetails-tags-headding'>Tags</h1>
                        <p className='post-tags'>#{particularPost.tag}</p>

                    </div>
                    <div className='postdetails-comment-card'>
                            <h1 className='postdetails-comment-headding'>{`Comments(${particularPost.commentText.length})`}</h1>
                            <input type="text" placeholder="Add a comment..." className='postdetails-commentinput' value={postcomment} onChange={onEnteringComment} />
                            <div className='postdetails-button-card'>
                                <button className='postdetails-Button' onClick={addPostComment} >Post</button>
                            </div>
                            <ul className='postdetails-comment-by-user'>
                                {particularPost.commentText.map(each => (
                                    <li key={each.id} className='postdetails-comment-list' ><img src={each.imgUrl} alt="user comment Image" className='postdetails-comment-profile' />
                                    <div className='postdetals-comment-profile-comment'>
                                        <h1 className='postdetails-comment-user-name' >{each.user}</h1>
                                        <p className='postdetails-comment-user-text'>{each.text}</p>
                                        <p className='postdetails-comment-user-date'>{each.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                                    </div></li>
                                ))}
                            </ul>
                    </div>
                 </div>
            </div>
           
            </div>
        </div>
    </div>
)}

export default PostDetails 
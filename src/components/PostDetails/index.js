import{useContext,useState,useEffect} from 'react'
import Cookies from 'js-cookie'
import {v4 as uuidv4} from 'uuid'
import { MdDelete } from "react-icons/md";
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import DevContext from '../../context/DevContext'
import './index.css'

const PostDetails =(props)=>{
    const [particularPost,setParticularPost]=useState({})
    const [postcomment,setPostComment] =useState('')
    const [refresh, setRefresh] = useState(false)
   
    const jwt = Cookies.get("jwt_token")
    const jwtuser = Cookies.get("user_id")
    const {match}=props 
    const {params} = match
    const {id}=params
    useEffect(()=>{
        const fetchpost = async ()=>{
            const url = `http://localhost:3000/devconnect/posts/${id}`
            const options = {
                method:"GET",
                headers:{
                    authorization:`Bearer ${jwt}`
                }
            }
            const response = await fetch(url ,options)
            const data = await response.json()
            if(response.ok){
                const updatedpost =  {
            content : data.content,
            id: data.id,
            likesCount : data.likesCount,
            name : data.name,
            tag : data.tag,
            title : data.title,
            date:data.created_at,
            imgUrl:data.image_url,
            comments:data.comments.map(each=>({
                id:each.comment_id,
                comment:each.comment,
                commentPostId:each.post_id,
                date:each.date,
                name:each.name,
                owner :each.commented_by
            })),
            likes:data.likes.likesCount
            }
            setParticularPost(updatedpost)

            }

        }

        fetchpost()
    },[postcomment,refresh])

     const onGoback=()=>{
        const{history}=props
        history.replace("/")
    }
     const onEnteringComment=(event)=>{
        setPostComment(event.target.value)
    }

    const addPostComment = async ()=>{
        const url = `http://localhost:3000/devconnect/${id}/comment`
        const options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization :`Bearer ${jwt}`
            },
            body:JSON.stringify({comment:postcomment})
        }
        const response = await fetch(url,options)
        console.log(response)
        setPostComment('')

    }

    const onClickDelete= async(comId)=>{

        const url = `http://localhost:3000/devconnect/commentdelete/${comId}/post/${id}`
         const options = {
                method:"DELETE",
                headers:{
                    authorization:`Bearer ${jwt}`
                }
            }

        const response = await fetch(url,options)
        setRefresh(prev => !prev)
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
                        <p className='byusername'>By <span className='name'>{particularPost.name}</span></p>
                        <p className='postdate'>{new Date(particularPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
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
                            <h1 className='postdetails-comment-headding'>{`Comments(${particularPost.comments?.length})`}</h1>
                            <input type="text" placeholder="Add a comment..." className='postdetails-commentinput' value={postcomment} onChange={onEnteringComment} />
                            <div className='postdetails-button-card'>
                                <button className='postdetails-Button' type="button" onClick={addPostComment} >Post</button>
                            </div>
                            
                            <ul className='postdetails-comment-by-user'>
                                {particularPost.comments?.map(each => (
                                    <li key={each.id} className='postdetails-comment-list' >
                                        
                                     <div className='postdetails-comment-extra'>
                                        <img src={each.imgUrl} alt="user comment Image" className='postdetails-comment-profile' />
                                    <div className='postdetals-comment-profile-comment'>
                                        <h1 className='postdetails-comment-user-name' >{each.name}</h1>
                                        <p className='postdetails-comment-user-text'>{each.comment}</p>
                                        <p className='postdetails-comment-user-date'>{new Date(each.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                                    </div>

                                     </div>
                                    {String(jwtuser) === String(each.owner) && <button type="button" className='postdetails-delete-button' onClick={()=>onClickDelete(each.id)} >
                                        <MdDelete />
                                    </button> }
                                    </li>
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
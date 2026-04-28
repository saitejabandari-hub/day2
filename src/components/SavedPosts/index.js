import { useContext,useEffect,useState } from 'react'
import Cookies from'js-cookie'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import PostCard from '../PostCard'
import Loadspinner from '../Loadspinner'
import DevContext from '../../context/DevContext'
import './index.css'

const SavedPosts = (props) =>{
     const [allposts ,setAllposts]=useState([])
     const [likesposts,setLikesposts] = useState([])
     const [load,setLoad]=useState(true)

     const onTackBack =() =>{
        const{history}=props
        history.replace('/')
     }

    useEffect(()=>{
        setLoad(true)
        const fetchposts = async () =>{
        const url="http://localhost:3000/devconnect/savedposts"
        const  jwt = Cookies.get("jwt_token")
        const options = {
            method:"GET",
            headers :{
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
        
        setLikesposts(likedpostdetails)
        setAllposts(updateposts)
        }

        fetchposts()
        setLoad(false)
    },[])

    
    return (
    <div className="savedposts-bgContainer">
        <NavBar/>
        <div className="savedposts-firstContainer">
            <Sidebar/>
            <div className="savedposts-secondContainer">
              {load?<Loadspinner/>:<>  <div className='saved-heading-container'><h1 className='saved-Container-heading'>Saved Posts</h1></div>
                {allposts.length === 0 ? (<div className="empty-state">
                        <p className="empty-title">📭 No posts saved yet</p>
                         <p className="empty-text">Go hurry up and save posts 🛒</p>
                         <button className="create-btn" onClick={onTackBack}>Save Post</button>
                    </div>) : <ul className="posts-list" >
                                {allposts.map(each => (
                                    <li key={each.id}  className="post-item" ><PostCard  post={each} likesposts={likesposts} /></li>
                                ))}
                </ul>}</>}
            </div>

        </div>

    </div>
)}

export default SavedPosts

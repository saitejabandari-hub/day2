import { useContext,useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import PostCard from '../PostCard'
import DevContext from '../../context/DevContext'

import './index.css'

const Tags = () =>{
    const [allposts ,setAllposts]=useState([])
    const [likesposts,setLikesposts] = useState([])
    const {rerender}=useContext(DevContext)
    const {id} = useParams()
     useEffect(()=>{

        const fetchposts = async () =>{
            const url = "http://localhost:3000/devconnect/posts"
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

        // setFilteredPost(allposts) // dummy data
    },[rerender])

    const filterdPost = allposts.filter(each => each.tag.toLowerCase() === id.toLowerCase())
    
    return(
    <div className='tags-bgContainer' >
        <NavBar/>
        <div className='tags-firstContainer' >
            <Sidebar/>
            <div className='tags-secondContainer'>
                <div className='tags-heading-container'><h1 className='tags-Container-heading'>#{id}</h1></div>

                 {<ul className="tags-posts-list" >
                                {filterdPost.map(each => (
                                    <li key={each.id}  className="post-item" ><PostCard  post={each} likesposts={likesposts} /></li>
                                ))}
                </ul>}
            </div>
        </div>
    </div>
)}

export default Tags

import {useContext,useState,useEffect} from 'react'
import Cookies from 'js-cookie'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import PostCard from '../PostCard'
import Loadspinner from '../Loadspinner'
import DevContext from '../../context/DevContext'
import './index.css'

const Home =(props)=>{
    const [allposts ,setAllposts]=useState([])
    const [filteredPost,setFilteredPost] = useState([])
    const [likesposts,setLikesposts] = useState([])
    const {rerender}=useContext(DevContext)
    const [load,setLoad]=useState(true)
    const onSearchedByInput=(value)=>{

        const filtered = allposts.filter(each => each.title.toLowerCase().includes(value.toLowerCase())|| each.tag.toLowerCase().includes(value.toLowerCase())||each.name.toLowerCase().includes(value.toLowerCase()))
        
        setFilteredPost(filtered)

    }

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
        setFilteredPost(updateposts)
        }

        fetchposts()

        // setFilteredPost(allposts) // dummy data
        setLoad(false)
    },[rerender])


    const onTaketoCreatePost =  () =>{
            const{history}=props
            history.replace("/create-post")
        }
         return(
            <div className="home-bg-container">
            <NavBar onSearchedByInput={onSearchedByInput}/>
            <div className='second-container'>      
                < Sidebar/>
                <div className='home-content'>
                   {load?<Loadspinner/>:<> <div className='home-heading-container'>
                        <h1 className='feed-heading'>All Posts</h1>
                        {/* <button type="button" className='addpost-button' >+ Post</button> */}
                        <div className='sorting-container'>
                            <p className='sort-heading'>Sort : </p>
                            <select className='select-element'>
                        <option >Latest</option>
                        <option>old</option>
                        </select>
                        </div>
                    </div>
                   {filteredPost.length === 0 ? (<div className="empty-state">
                        <p className="empty-title">📭 No posts yet</p>
                         <p className="empty-text">Start sharing your thoughts 🚀</p>
                         <button className="create-btn" onClick={onTaketoCreatePost} >+ Create Post</button>
                    </div>) : <ul className="posts-list" >
                                {filteredPost.map(each => (
                                    <li key={each.id}  className="post-item" ><PostCard  post={each} likesposts={likesposts} /></li>
                                ))}
                        </ul>}</>}
                </div>
            </div>
            </div>
        )
           
}

export default Home


 
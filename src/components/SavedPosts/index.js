import { useContext } from 'react'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import PostCard from '../PostCard'
import DevContext from '../../context/DevContext'
import './index.css'

const SavedPosts = (props) =>{
     const {allposts} = useContext(DevContext)

     const onTackBack =() =>{
        const{history}=props
        history.replace('/')
     }

    const filterdPost = allposts.filter(each => each.isSaved === true)
    
    return (
    <div className="savedposts-bgContainer">
        <NavBar/>
        <div className="savedposts-firstContainer">
            <Sidebar/>
            <div className="savedposts-secondContainer">
                <div className='saved-heading-container'><h1 className='saved-Container-heading'>Saved Posts</h1></div>
                {filterdPost.length === 0 ? (<div className="empty-state">
                        <p className="empty-title">📭 No posts saved yet</p>
                         <p className="empty-text">Go hurry up and save posts 🛒</p>
                         <button className="create-btn" onClick={onTackBack}>Save Post</button>
                    </div>) : <ul className="posts-list" >
                                {filterdPost.map(each => (
                                    <li key={each.id}  className="post-item" ><PostCard  post={each} /></li>
                                ))}
                </ul>}
            </div>

        </div>

    </div>
)}

export default SavedPosts

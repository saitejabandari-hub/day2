import {useContext} from 'react'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import PostCard from '../PostCard'
import DevContext from '../../context/DevContext'
import './index.css'

const Home =()=>{
    const {allposts} = useContext(DevContext)       
         return(
            <div className="home-bg-container">
            <NavBar/>
            <div className='second-container'>      
                < Sidebar/>
                <div className='home-content'>
                    <div className='home-heading-container'>
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
                   {allposts.length === 0 ? (<div className="empty-state">
                        <p className="empty-title">📭 No posts yet</p>
                         <p className="empty-text">Start sharing your thoughts 🚀</p>
                         <button className="create-btn">+ Create Post</button>
                    </div>) : <ul className="posts-list" >
                                {allposts.map(each => (
                                    <li key={each.id}  className="post-item" ><PostCard  post={each} /></li>
                                ))}
                        </ul>}
                </div>
            </div>
            </div>
        )
           
}

export default Home


 
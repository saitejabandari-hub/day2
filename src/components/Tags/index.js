
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import PostCard from '../PostCard'

const Tags = () =>{(
    <div className='tag-bgContainer' >
        <NavBar/>
        <div className='tag-firstContainer' >
            <Sidebar/>
            <div className='tag-secondContainer'>
                 {filteredPost.length === 0 ? (<div className="empty-state">
                        <p className="empty-title">📭 No posts yet</p>
                         <p className="empty-text">Start sharing your thoughts 🚀</p>
                         <button className="create-btn" onClick={onTaketoCreatePost} >+ Create Post</button>
                    </div>) : <ul className="posts-list" >
                                {filteredPost.map(each => (
                                    <li key={each.id}  className="post-item" ><PostCard  post={each} /></li>
                                ))}
                        </ul>}
            </div>
        </div>
    </div>
)}

export default Tags
import {FaHeart, FaRegCommentDots} from 'react-icons/fa'
import './index.css'

const PostCard = (props) =>{
    const{post}=props
    const {user, content, likes, comments, tag} = post
    
    return (
         <div className="post-card">
      <div className="post-header">
        <div className="user-info">
          <div className="avatar">{user[0]}</div>
          <p className="user-name">{user}</p>
        </div>

        <p className="post-tag">#{tag}</p>
      </div>
      <p className="post-text">{content}</p>
      <div className="post-footer">
  <div className="post-like">
    <FaHeart className="icon" />
    <span className="count">{likes}</span>
  </div>

  <div className="post-comment">
    <FaRegCommentDots className="icon" />
    <span className="count">{comments}</span>
  </div>
</div>
    </div>
    )
         
     
}

export default PostCard
import {useContext} from 'react'
import {FaHeart, FaRegCommentDots} from 'react-icons/fa'
import DevContext from '../../context/DevContext'
import './index.css'

const PostCard = (props) =>{
  const{onAddingLike}=useContext(DevContext)
    const{post}=props
    const {id,user, content, likes, tag,isLiked,commentText} = post

    const onClickLike = () =>{
     
      onAddingLike(id)
    }
    
    return (
         <div className="post-card">
      <div className="post-header">
        <div className="user-info">
          <div className="avatar">{user[0]}</div>
          <p className="user-name">{user}</p>
        </div>

        <p className="post-tag">{tag}</p>
      </div>
      <p className="post-text">{content}</p>
      <div className="post-footer">
  <div className={isLiked ? "post-liked" : "post-like"} onClick={onClickLike} >
    <FaHeart className="icon" />
    <span className="count">{likes}</span>
  </div>

  <div className="post-comment">
    <FaRegCommentDots className="icon" />
    <span className="count">{commentText.length}</span>
  </div>
</div>
    </div>
    )
         
     
}

export default PostCard
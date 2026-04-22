import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {FaHeart, FaRegCommentDots,} from 'react-icons/fa'
import { FaBookmark } from "react-icons/fa6";
import DevContext from '../../context/DevContext'
import './index.css'

const PostCard = (props) =>{
  const{onAddingLike,onClickedSave}=useContext(DevContext)
    const{post}=props
    const {id,title, content, likesCount, tag,isLiked,commentsCount,date,imgUrl,isSaved} = post

    const onClickLike = () =>{
      onAddingLike(id)
    }

    const onClickingSave=()=>{
      onClickedSave(id)

    }

    
    
    return (
      <div className="post-card">
            <div className='postCard-firstContainer'>
              <img src={imgUrl} alt="post image" className='postCard-image' />
              <Link to={`/post/${id}` } className="postcard-Link" >
                <div className='postCard-inndercard'>
                  <div className="post-header">
                    <h1 className='post-title'>{title}</h1>
                    <p className="post-tag">#{tag}</p>
              </div>
                <p className="post-text">{content}</p>

                </div>
          </Link>
            </div>
              <div className="post-footer">
              <div className='post-footer-inner-card'>
                  <div>
                  <p className='post-date'>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                </div>
          <div className={isLiked ? "post-liked" : "post-like"} onClick={onClickLike} >
            <FaHeart className="icon" />
            <span className="count">{likesCount}</span>
          </div>

          <div className="post-comment">
            <FaRegCommentDots className="icon" />
            <span className="count">{commentsCount}</span>
          </div>
              </div>
          <div className={isSaved ? 'post-saved-container' : 'post-save-container'} onClick={onClickingSave} >
              <FaBookmark />
            </div>
            </div>
            
    </div>
    )
         
     
}

export default PostCard

{/* <div className="user-info">
              <div className="avatar">{user[0]}</div>
          <   p className="user-name">{user}</p>
  </div> */}
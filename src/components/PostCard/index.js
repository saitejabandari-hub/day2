import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {useContext,useState,useRef,useEffect} from 'react'
import {FaHeart, FaRegCommentDots,} from 'react-icons/fa'
import { FaBookmark } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import DevContext from '../../context/DevContext'
import './index.css'

const PostCard = (props) =>{
  const{onClickedSave,onRender}=useContext(DevContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
    const{post,likesposts}=props
    const {id,title, content, likesCount, tag,commentsCount,date,imgUrl,isSaved,users} = post
    
    const jwtuser = Cookies.get("user_id")
    const jwt = Cookies.get("jwt_token")
   

    useEffect(()=>{
      const handleClickOutside = (event) =>{
        if(menuRef.current && !menuRef.current.contains(event.target)){
          setMenuOpen(false)
        }
      }
        document.addEventListener('mousedown',handleClickOutside)

        return () => {
          document.removeEventListener('mousedown',handleClickOutside)
        }
    },[])

    const onClickLike = async () =>{
      const url=`http://localhost:3000/devconnect/${id}/like`

      const options = {
        method:"POST",
        headers:{
          Authorization:`Bearer ${jwt}`
        }
      }

      const response = await fetch(url,options)
      onRender()

    }

    const onClickingSave=()=>{
      onClickedSave(id)

    }

    const isLiked = likesposts?.some(each => Number(each.likeby) === Number(jwtuser) && Number(each.postId) === Number(id) )

      const onClickEdit =()=>{
        setMenuOpen(false)

      }

      const onClickDelete= async()=>{
        onRender()
        setMenuOpen(false)
        const url = `http://localhost:3000/devconnect/posts/${id}`
        const options = {
          method:"DELETE",
          headers:{
            Authorization:`Bearer ${jwt}`
          }
        }

        const response = await fetch(url,options)

        if(response.ok){
          console.log("post deleted")
        }

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
          {Number(users) === Number(jwtuser) && <div className="three-dot-wrapper" ref={menuRef}>
             <div className="three-dots" onClick={() => setMenuOpen(prev => !prev)}>
                        < BsThreeDotsVertical className='three-dots-span'/>
              </div>
              {menuOpen && (
                        <div className="dropdown">
                            <button className="edit-btn" onClick={onClickEdit}>
                              <FaRegEdit/> <Link to={`/edit-post/${id}`} >Edit</Link>
                            </button>
                            <div className="dropdown-divider"></div>
                            <button className="delete-btn" onClick={onClickDelete}>
                                <RiDeleteBin6Line/> Delete
                            </button>
                        </div>
                    )}
          </div>}
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
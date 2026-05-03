// import {Link,useLocation} from 'react-router-dom'
// import './index.css'
// import { FiHome, FiPlus, FiBookmark, FiUser } from 'react-icons/fi'
// import { RxDashboard } from "react-icons/rx";
// import { AiOutlineTags } from "react-icons/ai";

// const Sidebar =()=>{
//     const location = useLocation()
//     const path = location.pathname.replace('/','')
//     const knownPaths = ['dashboard', 'create-post', 'savedposts', 'profile', 'tags'];
//     const isknownpage = knownPaths.includes(path)
//     return (
//     <div className='sidebar-container'>
//         <Link to="/"><p className={!isknownpage ? "active" : "menu-item"}><FiHome/>  Home</p></Link>
//         <Link to="/dashboard"><p className={path === 'dashboard' ? "active" : "menu-item"}><RxDashboard/>Dashboard</p></Link>
//         <Link to="/create-post" ><p className={path === 'create-post' ? "active" : "menu-item"}><FiPlus/>Create Post</p></Link>
//         <Link to="/savedposts"><p className={path === 'savedposts' ? "active" : "menu-item"}><FiBookmark/>Bookmark</p></Link>
//        <Link to="/profile"> <p className={path === 'profile' ? "active" : "menu-item"}><FiUser/>Profile</p></Link>
//        <Link to="/tags"> <p className={path === 'tags' ? "active" : "menu-item"}><AiOutlineTags/>Tags</p></Link>
//     </div>
// )}

// export default Sidebar 

import { Link, useLocation,withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useState } from 'react'
import './index.css'
import { FiHome, FiPlus, FiBookmark, FiUser } from 'react-icons/fi'
import { RxDashboard } from "react-icons/rx";
import { AiOutlineTags } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const location = useLocation()
  const path = location.pathname.replace('/', '')

  const knownPaths = ['dashboard', 'create-post', 'savedposts', 'profile', 'tags'];
  const isknownpage = knownPaths.includes(path)

  const handleClick = () => {
    setIsOpen(false)
  }

  const onClickLogout=()=>{
          Cookies.remove("user_id")
          Cookies.remove("jwt_token")
         const{history}=props
         history.replace("/login")
      }

  return (
    <>
      <div className="menu-btn" onClick={() => setIsOpen(true)}>☰</div>

      <div className={`sidebar-container ${isOpen ? "open" : ""}`}>

       <div className='sidebar-separate-elements'>

     <div className="close-btn" onClick={() => setIsOpen(false)}>✕</div>

         <Link to="/" onClick={handleClick}>
          <p className={!isknownpage ? "active" : "menu-item"}>
            <FiHome /> Home
          </p>
        </Link>

        <Link to="/dashboard" onClick={handleClick}>
          <p className={path === 'dashboard' ? "active" : "menu-item"}>
            <RxDashboard /> Dashboard
          </p>
        </Link>

        <Link to="/create-post" onClick={handleClick}>
          <p className={path === 'create-post' ? "active" : "menu-item"}>
            <FiPlus /> Create Post
          </p>
        </Link>

        <Link to="/savedposts" onClick={handleClick}>
          <p className={path === 'savedposts' ? "active" : "menu-item"}>
            <FiBookmark /> Bookmark
          </p>
        </Link>

        <Link to="/profile" onClick={handleClick}>
          <p className={path === 'profile' ? "active" : "menu-item"}>
            <FiUser /> Profile
          </p>
        </Link>

        <Link to="/tags" onClick={handleClick}>
          <p className={path === 'tags' ? "active" : "menu-item"}>
            <AiOutlineTags /> Tags
          </p>
        </Link>
       </div>

        <button type="button" className='nav-logout-button' onClick={onClickLogout} > <IoIosLogOut className='logout-icon'/> Logout</button>

      </div>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  )
}

export default withRouter(Sidebar)
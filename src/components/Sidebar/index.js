import {Link,useLocation} from 'react-router-dom'
import './index.css'
import { FiHome, FiPlus, FiBookmark, FiUser } from 'react-icons/fi'
import { RxDashboard } from "react-icons/rx";
import { AiOutlineTags } from "react-icons/ai";

const Sidebar =()=>{
    const location = useLocation()
    const path = location.pathname.replace('/','')
    return (
    <div className='sidebar-container'>
        <Link to="/"><p className={path === '' ? "active" : "menu-item"}><FiHome/>  Home</p></Link>
        <Link to="/dashboard"><p className={path === 'dashboard' ? "active" : "menu-item"}><RxDashboard/>Dashboard</p></Link>
        <Link to="/create-post" ><p className={path === 'create-post' ? "active" : "menu-item"}><FiPlus/>Create Post</p></Link>
        <Link to="/savedposts"><p className={path === 'savedposts' ? "active" : "menu-item"}><FiBookmark/>Bookmark</p></Link>
       <Link to="/profile"> <p className={path === 'profile' ? "active" : "menu-item"}><FiUser/>Profile</p></Link>
       <Link to="/tags"> <p className={path === 'tags' ? "active" : "menu-item"}><AiOutlineTags/>Tags</p></Link>
    </div>
)}

export default Sidebar
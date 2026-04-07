import {Link} from 'react-router-dom'
import './index.css'
import { FiHome, FiPlus, FiBookmark, FiUser } from 'react-icons/fi'
import { RxDashboard } from "react-icons/rx";
import { AiOutlineTags } from "react-icons/ai";

const Sidebar =()=>(
    <div className='sidebar-container'>
        <Link to="/"><p className="menu-item active"><FiHome/>  Home</p></Link>
        <Link to="/dashboard"><p className="menu-item"><RxDashboard/>Dashboard</p></Link>
        <Link to="/create-post" ><p className="menu-item"><FiPlus/>create post</p></Link>
        <p className="menu-item"><FiBookmark/>save</p>
        <p className="menu-item"><FiUser/>profile</p>
        <p className="menu-item"><AiOutlineTags/>Tags</p>
    </div>
)

export default Sidebar
import './index.css'
import { FiHome, FiPlus, FiBookmark, FiUser } from 'react-icons/fi'

const Sidebar =()=>(
    <div className='sidebar-container'>
        <p className="menu-item active"><FiHome/>  Home</p>
        <p className="menu-item"><FiPlus/>create post</p>
        <p className="menu-item"><FiBookmark/>save</p>
        <p className="menu-item"><FiUser/>profile</p>
    </div>
)

export default Sidebar
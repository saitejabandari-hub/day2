import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import PostCard from '../PostCard'
import DevContext from '../../context/DevContext'

import './index.css'

const Tags = () =>{
    const {allposts} = useContext(DevContext)
    const {id} = useParams()

    const filterdPost = allposts.filter(each => each.tag.toLowerCase() === id.toLowerCase())
    
    return(
    <div className='tags-bgContainer' >
        <NavBar/>
        <div className='tags-firstContainer' >
            <Sidebar/>
            <div className='tags-secondContainer'>
                <div className='tags-heading-container'><h1 className='tags-Container-heading'>#{id}</h1></div>

                 {<ul className="posts-list" >
                                {filterdPost.map(each => (
                                    <li key={each.id}  className="post-item" ><PostCard  post={each} /></li>
                                ))}
                </ul>}
            </div>
        </div>
    </div>
)}

export default Tags

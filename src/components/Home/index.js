import {Component} from 'react'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import PostCard from '../PostCard'
import './index.css'

class Home extends Component{
    state={post:[{
    id: 1,
    user: 'Naruto 🥷',
    imgUrl:"https://placehold.co/300x200/EEF2FF/A5B4FC?text=No+Image",
    content: 'Learning React is awesome!',
    likes: 10,
    comments: 2,
    tag: 'React',
  },
{
    id: 2,
    user: 'Sensei',
    imgUrl:"https://placehold.co/300x200/EEF2FF/A5B4FC?text=No+Image",
    content: 'Consistency beats talent 🔥',
    likes: 25,
    comments: 5,
    tag: 'Motivation',
  },]}

    render(){
        const {post}=this.state
        return(
            <div className="home-bg-container">
            <NavBar/>
            <div className='second-container'>      
                < Sidebar/>
                <div className='home-content'>
                    <div className='home-heading-container'>
                        <h1 className='feed-heading'>All Posts</h1>
                        {/* <button type="button" className='addpost-button' >+ Post</button> */}
                        <div className='sorting-container'>
                            <p className='sort-heading'>Sort : </p>
                            <select className='select-element'>
                        <option >Latest</option>
                        <option>old</option>
                        </select>
                        </div>
                    </div>
                   {post.length === 0 ? (<div className="empty-state">
                        <p className="empty-title">📭 No posts yet</p>
                         <p className="empty-text">Start sharing your thoughts 🚀</p>
                         <button className="create-btn">+ Create Post</button>
                    </div>) : <ul className="posts-list" >
                                {post.map(each => (
                                    <li key={each.id}  className="post-item" ><PostCard  post={each} /></li>
                                ))}
                        </ul>}
                </div>
            </div>
            </div>
        )
    }
}

export default Home
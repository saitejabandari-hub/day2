import {useState} from 'react'
import { RxFontBold } from "react-icons/rx";
import { RxFontItalic } from "react-icons/rx";
import { IoListSharp } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'

import './index.css'


const CreatePost =()=>{
    const [title , setTitle] = useState('')
    const [tags , setTags ] = useState('')
    const [content , setContent] = useState('')

    const [newPost,setnewPost] = useState([])

    const onEnteringTitle = (event) =>{
        setTitle(event.target.value)
    }

    const onEnteringTag = (event) =>{
        setTags(event.target.value)
    }

   const onEnteringContent = (event) =>{
    setContent(event.target.value)
   }

   const onAddPost = () =>{
    const newone = {
        title,
        tags,
        content,
        comments:0,
        likes:0,
        id : Date.now(),
        user : "Sasuke"
    }

    setnewPost(prev => [...prev , newone])

   }
    
    return (
    <div className='create-bgcontainer'>
        <NavBar/>
        <div className='create-firstContainer' >
            <Sidebar/>
            <div className='create-secondContainer' >
                <h1 className='create-heading'>Create a New Post</h1>
                <div className='create-input-card'>
                    <div className='create-title-card'>
                        <label className='create-input-label'>Title</label>
                        <input type="text" className='inputing' placeholder="Enter post title..." onChange={onEnteringTitle} />
                    </div>
                    <div className='create-title-card'>
                        <label className='create-input-label' >Tags</label>
                        <input type="text" className='inputing' placeholder='e.g React Java Webdev' onChange={onEnteringTag} />
                    </div>
                </div>
                <h1 className='create-content' >Content</h1>
                <div className='create-content-container'>
                    <div className='content-container-header'>
                        <RxFontBold className="change-font-bold" />
                        <RxFontItalic className="change-font-bold"  />
                        <IoListSharp className="change-font-bold" />
                        <IoListSharp className="change-font-bold" />
                        <IoImageOutline className="change-font-bold"/>
                    </div>
                    <textarea placeholder='Write your post content here...' className='textarea' onChange={onEnteringContent} />
                </div>
                <div className='create-button-card'>
                    <button className='create-cancel-button' >Cancel</button>
                    <button className='create-publish-button' onClick={onAddPost} >Publish Post</button>
                </div>
            </div>
        </div>
    </div>
)}

export default CreatePost
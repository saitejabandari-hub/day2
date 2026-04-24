import {useState,useContext,useEffect} from 'react'
import Cookies from 'js-cookie'
import { RxFontBold } from "react-icons/rx";
import { RxFontItalic } from "react-icons/rx";
import { IoListSharp } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import DevContext from '../../context/DevContext';
import './index.css'

const EditPost = (props)=>{
    const [title , setTitle] = useState('')
    const [tags , setTags ] = useState('')
    const [content , setContent] = useState('')
    const [file, setFile] = useState(null)
    const [generatedUrl,setGeneratedUrl] = useState('')
    const {onAddingPostToDB} = useContext(DevContext)

    const onEnteringTitle = (event) =>{
        setTitle(event.target.value)
    }

    const onEnteringTag = (event) =>{
        setTags(event.target.value)
    }

   const onEnteringContent = (event) =>{
    setContent(event.target.value)
   }

    const handleFile = (event) => {
        setFile(event.target.files[0])
    }

    const jwt = Cookies.get("jwt_token")
    const jwtuser = Cookies.get("user_id")
    const {match} = props
    const {params} = match
    const {id} = params

    useEffect(()=>{
    const getpostdetails = async () =>{

          const url = `http://localhost:3000/devconnect/posts/${id}`
            const options = {
                method:"GET",
                headers:{
                    authorization:`Bearer ${jwt}`
                }
            }
            const response = await fetch(url ,options)
            const data = await response.json()
            if(response.ok){
                const getpost =  {
                content : data.content,
                tag : data.tag,
                title : data.title,
                imgUrl:data.image_url,
                }

                setContent(getpost.content)
                setGeneratedUrl(getpost.imgUrl)
                setTags(getpost.tag)
                setTitle(getpost.title)

            }

       

    }

    getpostdetails()

    },[])

const uploadImage = async () => {
  const formData = new FormData()

  formData.append("file", file)
  formData.append("upload_preset", "devconnect_upload")

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/dfvz1trpi/image/upload",
    {
      method: "POST",
      body: formData
    }
  )

  const data = await response.json()
  setGeneratedUrl(data.secure_url)
  return data.secure_url
}

   const onAddPost = async () =>{
     let imageUrl = ""

    if (file) {
        imageUrl = await uploadImage()
    }
    const newone = {
        title,
        tag:tags.replace(/#/g,''),
        content,
        imgUrl : generatedUrl,
    }


    const url = `http://localhost:3000/devconnect/updatepost/${id}`

    const jwt = Cookies.get("jwt_token")

    const options = {
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${jwt}`
        },

        body: JSON.stringify(newone)

    }

    const response = await fetch(url,options)

    console.log(response)
  

    setTags('')
    setTitle('')
    setContent('')
    setGeneratedUrl('')

    const {history}=props
    history.replace('/')

   }

   const onCancelupdate = async () =>{

     const url = `http://localhost:3000/devconnect/posts/${id}`
            const options = {
                method:"GET",
                headers:{
                    authorization:`Bearer ${jwt}`
                }
            }
            const response = await fetch(url ,options)
            const data = await response.json()
            if(response.ok){
                const getpost =  {
                content : data.content,
                tag : data.tag,
                title : data.title,
                imgUrl:data.image_url,
                }

                setContent(getpost.content)
                setGeneratedUrl(getpost.imgUrl)
                setTags(getpost.tag)
                setTitle(getpost.title)

            }

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
                        <input type="text" className='inputing' value={title} placeholder="Enter post title..." onChange={onEnteringTitle} />
                    </div>
                    <div className='create-title-card'>
                        <label className='create-input-label' >Tags</label>
                        <input type="text" className='inputing' value={`#${tags}`} placeholder='e.g React Java Webdev' onChange={onEnteringTag} />
                    </div>
                </div>
                <h1 className='create-content' >Cover Image</h1>
                <div className='cover-image-container' style={{ backgroundImage: `url(${generatedUrl})`}}>
                    <h1 className='cover-image-heading'>📷Click to upload or drag image</h1>
                    <p className='cover-image-paragraph'>PNG, JPG up to 5MB</p>
                    <input type="file" onChange={handleFile} />
                     <button onClick={uploadImage}>Upload Image</button>

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
                    <textarea placeholder='Write your post content here...' value={content} className='textarea' onChange={onEnteringContent} />
                </div>
                <div className='create-button-card'>
                    <button className='create-cancel-button'onClick={onCancelupdate} >Cancel</button>
                    <button className='create-publish-button' onClick={onAddPost} >Update Post</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default EditPost
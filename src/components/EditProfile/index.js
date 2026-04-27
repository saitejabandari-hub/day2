import { useEffect,useContext,useState } from 'react'
import Cookies from 'js-cookie'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import DevContext from '../../context/DevContext'

import './index.css'
const EditProfile = () =>{
const {rerender}=useContext(DevContext)
const [adminname,setAdminname] = useState('')
const [adminemail,setAdminemail] = useState('')
const [adminbio,setAdminbio] = useState('')
const [file, setFile] = useState(null)
const [adminimg,setAdminimg] = useState('')
const jwt = Cookies.get("jwt_token")
const jwtuser = Cookies.get("user_id")

useEffect(()=>{
        
        const fetchprofile = async () =>{

        const url = `http://localhost:3000/devconnect/profile`
        const options = {
            method:"GET",
            headers : {
                "Content-Type":"application/json",
                Authorization: `Bearer ${jwt}`
            }

        }

        const response = await fetch(url,options)
        
        if(response.ok){
        const data = await response.json()
        const adminDetails = {
            name:data.name,
            email:data.email,
            bio:data.bio,
            profileImg:data.image_url,

        }
     
       setAdminname(data.name)
       setAdminemail(data.email)
       setAdminbio(data.bio)
       setAdminimg(data.profileImg)

        }

        }
        fetchprofile()

       },[rerender,jwt,jwtuser])

const handleFile = (event) => {
        setFile(event.target.files[0])
    }

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
  setAdminimg(data.secure_url)
  return data.secure_url
}

const onupdatingusername=(event)=>{

    setAdminname(event.target.value)

}

const onupdatinguseremail=(event)=>{
    setAdminemail(event.target.value)
}

const onupdatinguserbio=(event)=>{
    setAdminbio(event.target.value)
}

const onCancelingedit=async()=>{
     const url = `http://localhost:3000/devconnect/profile`
        const options = {
            method:"GET",
            headers : {
                "Content-Type":"application/json",
                Authorization: `Bearer ${jwt}`
            }

        }

        const response = await fetch(url,options)
        
        if(response.ok){
        const data = await response.json()
        const adminDetails = {
            name:data.name,
            email:data.email,
            bio:data.bio,
            profileImg:data.image_url,

        }
     
       setAdminname(data.name)
       setAdminemail(data.email)
       setAdminbio(data.bio)
       setAdminimg(data.profileImg)
}
}

const onClicksaveChanges= async()=>{

    const profiledetailsnew = {
        name:adminname,
        email:adminemail,
        imgUrl:adminimg,
        bio:adminbio
    } 

    const url="http://localhost:3000/devconnect/profileupdate"
    const options={
        method:"PUT",
        headers:{
            Authorization:`Bearer ${jwt}`
        },
        body:JSON.stringify(profiledetailsnew)
    }

    const response = await fetch(url,options)
    console.log(response)

}

    return(
        <div className='editprofile-container'>
            <NavBar/>
            <div className='editprofile-firstContainer'>
                <Sidebar/>
                <div className='editprofile-secondContainer'>
                    <div className='main-card'>
                        <p className='profileedit-heading'>Profile Picture</p>
                        <div className='profile-editing-card'>
                            {adminimg ? <img src={adminimg} className='profile-image-non' alt="admin" /> :<p className='profile-image-non'>{adminname[0]}</p>}
                            <div className='edit-image-details'>
                                 <h1 className='edit-image-heading'>📷Click to upload or drag image</h1>
                                 <p className='edit-image-paragraph'>PNG, JPG up to 5MB</p>
                                 <input type="file"  onChange={handleFile} />
                                <button type="button" className='choose-button' onClick={uploadImage}>upload</button>
                            </div>
                           
                        </div>
                         <hr className='horizontail'/>
                        <div className='edit-profile-alignment'>
                            <label>Full Name</label>
                            <input type="text" className='edit-input' value={adminname} placeholder="full name" onChange={onupdatingusername} />
                        </div>
                        <div className='edit-profile-alignment'>
                            <label>Email</label>
                            <input type="text" className='edit-input' value={adminemail} placeholder='Email'  onChange={onupdatinguseremail} />
                        </div>
                        <div className='edit-profile-alignment' >
                            <label>Bio</label>
                            <textarea className='edit-input-textarea'placeholder="bio" value={adminbio}  onChange={onupdatinguserbio} />
                        </div>

                        <div className='edit-profile-button-card'>
                            <button type="button" className='edit-cancel-button' onClick={onCancelingedit}>Cancel</button>
                            <button type="button" className='edit-save-button' onClick={onClicksaveChanges}>Save Change</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
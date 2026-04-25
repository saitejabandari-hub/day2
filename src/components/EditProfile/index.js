import NavBar from '../NavBar'
import Sidebar from '../Sidebar'


import './index.css'
const EditProfile = () =>{
    return(
        <div className='editprofile-container'>
            <NavBar/>
            <div className='editprofile-firstContainer'>
                <Sidebar/>
                <div className='editprofile-secondContainer'>
                    <div className='main-card'>
                        <p className='profileedit-heading'>Profile Picture</p>
                        <div className='profile-editing-card'>
                            <p className='profile-image-non'>N</p>
                            <div className='edit-image-details'>
                                 <h1 className='edit-image-heading'>📷Click to upload or drag image</h1>
                                 <p className='edit-image-paragraph'>PNG, JPG up to 5MB</p>
                                <button type="button" className='choose-button'>choose</button>
                            </div>
                           
                        </div>
                         <hr className='horizontail'/>
                        <div className='edit-profile-alignment'>
                            <label>Full Name</label>
                            <input type="text" className='edit-input' placeholder="full name" />
                        </div>
                        <div className='edit-profile-alignment'>
                            <label>Email</label>
                            <input type="text" className='edit-input' placeholder='Email' />
                        </div>
                        <div className='edit-profile-alignment' >
                            <label>Bio</label>
                            <textarea className='edit-input-textarea'placeholder="bio" />
                        </div>

                        <div className='edit-profile-button-card'>
                            <button type="button" className='edit-cancel-button'>Cancel</button>
                            <button type="button" className='edit-save-button'>Save Change</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
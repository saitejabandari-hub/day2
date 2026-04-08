import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import './index.css'

const Profile =() =>(
    <div className="profile-bgContainer">
        <NavBar/>
        <div className="profile-firstContainer">
            <Sidebar/>
            <div className="profile-secondContainer">
                <h1>Profile</h1>
            </div>
        </div>

    </div>

)

export default Profile
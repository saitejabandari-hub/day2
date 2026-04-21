import {Link,withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const NavBar =(props) =>{

    const {onSearchedByInput} = props
    
    const onSearchforPost =(event) =>{
        onSearchedByInput(event.target.value)
    }

    const onClickLogout=()=>{
        console.log(props)
        Cookies.remove("jwt_token")
       const{history}=props
       history.replace("/login")
    }
    
    return(

    <nav className="nav-container">

        <h1 className='nav-heading'>DevConnect</h1>

        <input type="search" placeholder="Search Posts...." className='nav-search' onChange={onSearchforPost}  />
        <div className='nav-profile-card'>
            <Link to="/profile">
        <div className='user-card'>
        <img src="https://www.gravatar.com/avatar/?d=mp&s=128" alt="profile" className='user-profile' />
        <h1 className='user-heading'>user</h1>
        </div>
        </Link>
        <button type="button" className='nav-logout-button' onClick={onClickLogout} >Logout</button>
        </div>

    </nav>

)}


export default withRouter(NavBar)

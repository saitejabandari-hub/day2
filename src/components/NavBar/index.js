import './index.css'

const NavBar =(props) =>{

    const {onSearchedByInput} = props
    
    const onSearchforPost =(event) =>{
        onSearchedByInput(event.target.value)
    }
    
    return(

    <nav className="nav-container">

        <h1 className='nav-heading'>DevConnect</h1>

        <input type="search" placeholder="Search Posts...." className='nav-search' onChange={onSearchforPost}  />

        <div className='user-card'>
        <img src="https://www.gravatar.com/avatar/?d=mp&s=128" alt="profile" className='user-profile' />
        <h1 className='user-heading'>user</h1>
        </div>

    </nav>

)}


export default NavBar

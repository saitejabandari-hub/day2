import './index.css'

const NavBar =() =>(

    <nav className="nav-container">

        <h1 className='nav-heading'>DevConnect</h1>

        <input type="search" placeholder="Search Posts...." className='nav-search' />

        <div className='user-card'>
        <img src="https://www.gravatar.com/avatar/?d=mp&s=128" alt="profile" className='user-profile' />
        <h1 className='user-heading'>user</h1>
        </div>

    </nav>

)


export default NavBar

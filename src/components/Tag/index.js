import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import './index.css'

const Tag =() =>(
    <div className="tag-bgContainer">
        <NavBar/>
        <div className="tag-firstContainer">
            <Sidebar/>
            <div className="tag-secondContainer">
                <h1>tag</h1>
            </div>
        </div>

    </div>

)

export default Tag
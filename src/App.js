import {Route,Switch} from 'react-router-dom'
import { useState } from 'react';
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import './App.css';
import DevContext from './context/DevContext.js'

const App =() => {
  const[allposts,setAllposts] = useState([{
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
    comments: 88,
    tag: 'Motivation',
  },])

  const onAddingPostToDB=(value)=>{
      setAllposts(prev => [...prev , value])
  }
  
 
    return(
      <DevContext.Provider value={{allposts,onAddingPostToDB:onAddingPostToDB}}>
       <div>
            <Switch>
                <Route exact path="/" component={Home} />
            <Route exact path="/create-post" component={CreatePost} />
            
        </Switch>
       </div>
      </DevContext.Provider>
)}



// const App = () =>(
//      <Switch>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/create-post" component={CreatePost} />
            
//         </Switch>
// )


export default App

import {Route,Switch} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
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
    
    tag: 'React',
    isLiked:false,
    commentText :[
      {
        id: uuidv4(),
        text : "nice one",
        user : "ino"

      },
       {
        id: uuidv4(),
        text : " one",
        user: 'shikamaru'
      }, {
        id: uuidv4(),
        text : "nice",
        user : 'fatso'
      }
    ]
  },
{
    id: 2,
    user: 'Sensei',
    imgUrl:"https://placehold.co/300x200/EEF2FF/A5B4FC?text=No+Image",
    content: 'Consistency beats talent 🔥',
    likes: 25,

    tag: 'Motivation',
    isLiked:false,
    commentText :[
       {
       id: uuidv4(),
        text : "nice one",
        user : "ino"

      },
       {
       id: uuidv4(),
        text : " one",
        user: 'shikamaru'
      }, 
      {
        id: uuidv4(),
        text : "nice",
        user : 'fatso'
      },
      {
        id: uuidv4(),
        text : "nice one",
        user : "ino"

      },
       {
       id: uuidv4(),
        text : " one",
        user: 'shikamaru'
      }, {
       id: uuidv4(),
        text : "nice",
        user : 'fatso'
      }

    ]
  },])

  const onAddingPostToDB=(value)=>{
      setAllposts(prev => [...prev , value])
  }

  const onAddingLike=(id) =>{
    const updatedPosts = allposts.map(each =>
      {
        if (each.id === id && each.isLiked === false){
        return {
          ...each, likes: each.likes + 1, isLiked: true
        }
      }else if (each.id === id && each.isLiked === true){
        return {
          ...each, likes: each.likes - 1, isLiked: false
        }
      }
      else{
        return each
      }
      
      }
    )  
    setAllposts(updatedPosts)
  }
  
 console.log(allposts)
    return(
      <DevContext.Provider value={{allposts,onAddingPostToDB,onAddingLike}}>
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

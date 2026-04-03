import {Route,Switch} from 'react-router-dom'
import { Component } from 'react';
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import './App.css';
import DevContext from './context/DevContext'

class App extends Component {
  state={posts:[{
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
    comments: 5,
    tag: 'Motivation',
  },]}
  
  render(){
    const{posts}=this.state
    return(
      <DevContext.Provider value={{posts}}>
        <Switch>
        <Route exact path="/create-post" component={CreatePost} />
        <Route exact path="/" component={Home} />
      </Switch>
      </DevContext.Provider>
)}}

// const App =() =>(
//         <Switch>
// //         <Route exact path="/create-post" component={CreatePost} />
// //         <Route exact path="/" component={Home} />
// //       </Switch>
// )

export default App

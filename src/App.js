import {Route,Switch} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import { useState ,useEffect } from 'react';
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import PostDetails from './components/PostDetails';
import Dashboard from './components/Dashboard'
import Tags from './components/Tags'
import './App.css';
import DevContext from './context/DevContext.js'

const App =() => {
// const[allposts,setAllposts] = useState(()=>{
//   const data = localStorage.getItem("posts")
  
//   if (!data || data === "undefined") {
//     return []
//   } else {
//     return JSON.parse(data)
//   }
// })

const[allposts,setAllposts] = useState([
{
    id: 1,
    title: 'My React Learning Journey 🚀',
    user: 'Naruto 🥷',
    imgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    content: 'Learning React is awesome! Just understood useState and useEffect today. The way React re-renders components is so satisfying once it clicks. Keep learning everyone! 💻',
    likes: 10,
    date: new Date('2026-04-01'),
    tag: 'React',
    isLiked: false,
    commentText: [
      { id: uuidv4(), text: "nice one", user: "Ino", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Ino&backgroundColor=b6e3f4", date: new Date('2026-04-01') },
      { id: uuidv4(), text: "Keep it up!", user: 'Shikamaru', imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Shikamaru&backgroundColor=8d8d5b", date: new Date('2026-04-02') },
      { id: uuidv4(), text: "React is life!", user: 'Choji', imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Choji&backgroundColor=e76f51", date: new Date('2026-04-03') }
    ]
  },
  {
    id: 2,
    title: 'Consistency is the Key 🔑',
    user: 'Sensei',
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    content: 'Consistency beats talent 🔥 Code every single day, even if it is just 30 minutes. Small steps compound into giant leaps. Your future self will thank you for not quitting today.',
    likes: 25,
    date: new Date('2026-04-02'),
    tag: 'Motivation',
    isLiked: false,
    commentText: [
      { id: uuidv4(), text: "This hit different today 🙏", user: "Ino", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Ino&backgroundColor=b6e3f4", date: new Date('2026-04-02') },
      { id: uuidv4(), text: "Needed this, thank you sensei!", user: 'Shikamaru', imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Shikamaru&backgroundColor=8d8d5b", date: new Date('2026-04-02') },
      { id: uuidv4(), text: "30 mins a day changed my life fr", user: 'Choji', imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Choji&backgroundColor=e76f51", date: new Date('2026-04-03') },
      { id: uuidv4(), text: "Consistency > Motivation always", user: "Ino", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Ino&backgroundColor=b6e3f4", date: new Date('2026-04-03') },
      { id: uuidv4(), text: "Bookmarking this post!", user: 'Shikamaru', imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Shikamaru&backgroundColor=8d8d5b", date: new Date('2026-04-04') },
      { id: uuidv4(), text: "🔥🔥🔥", user: 'Choji', imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Choji&backgroundColor=e76f51", date: new Date('2026-04-04') }
    ]
  },
  {
    id: 3,
    title: 'I Shipped My First Full-Stack App! 🎉',
    user: 'Sakura 🌸',
    imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    content: 'Just finished my first full-stack project! Frontend with React, backend with Node.js and Express. The feeling of seeing everything connected is indescribable. Keep pushing forward, developers! 💪',
    likes: 42,
    date: new Date('2026-04-02'),
    tag: 'FullStack',
    isLiked: false,
    commentText: [
      { id: uuidv4(), text: "That's amazing! What database did you use?", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2026-04-02') },
      { id: uuidv4(), text: "Congrats! Full-stack is the way to go 🔥", user: "Kakashi", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Kakashi&backgroundColor=c0c0c0", date: new Date('2026-04-03') },
      { id: uuidv4(), text: "Proud of you! Share the GitHub link!", user: "Tsunade", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Tsunade&backgroundColor=f4a261", date: new Date('2026-04-03') }
    ]
  },
  {
    id: 4,
    title: 'The Power of Reusable Components 🧩',
    user: 'Kakashi 📖',
    imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    content: 'Pro tip: Always break your UI into small reusable components. It saved me hours of debugging this week. Component-driven development is not just a trend — it\'s a superpower. 🧩 #React #CleanCode',
    likes: 87,
    date: new Date('2026-04-03'),
    tag: 'Tips',
    isLiked: false,
    commentText: [
      { id: uuidv4(), text: "This is so true! Learned it the hard way 😅", user: "Sakura", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sakura&backgroundColor=ff9eb5", date: new Date('2026-04-03') },
      { id: uuidv4(), text: "Great advice sensei!", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2026-04-03') },
      { id: uuidv4(), text: "Clean code = happy developer 😊", user: "Shikamaru", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Shikamaru&backgroundColor=8d8d5b", date: new Date('2026-04-04') },
      { id: uuidv4(), text: "Reusability is everything!", user: "Rock Lee", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=RockLee&backgroundColor=2d6a4f", date: new Date('2026-04-04') }
    ]
  },
  {
    id: 5,
    title: 'Embrace the Debugging Struggle 🏋️',
    user: 'Rock Lee 🥊',
    imgUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&h=400&fit=crop",
    content: 'No shortcuts in coding, just like in taijutsu! I spent 6 hours debugging only to find a missing semicolon 😂. But guess what? I learned more in those 6 hours than in any tutorial. Embrace the struggle! 🏋️',
    likes: 63,
    date: new Date('2026-04-03'),
    tag: 'Motivation',
    isLiked: false,
    commentText: [
      { id: uuidv4(), text: "Haha missing semicolon got me last week too 💀", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2026-04-03') },
      { id: uuidv4(), text: "The struggle is real but so is the growth!", user: "Kakashi", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Kakashi&backgroundColor=c0c0c0", date: new Date('2026-04-04') },
      { id: uuidv4(), text: "This is so relatable 😭", user: "Ino", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Ino&backgroundColor=b6e3f4", date: new Date('2026-04-05') }
    ]
  },
  {
    id: 6,
    title: 'First React App is LIVE on Vercel! 🌟',
    user: 'Naruto 🥷',
    imgUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    content: 'Dattebayo! 🍥 Just deployed my first React app to Vercel and it went LIVE! I remember when I could not even center a div. Never give up, believe it! The journey from console.log("hello world") to a live production app is worth every late night. Keep going! 🌟',
    likes: 120,
    date: new Date('2026-04-04'),
    tag: 'React',
    isLiked: false,
    commentText: [
      { id: uuidv4(), text: "Believe it! You did it! 🎉", user: "Sakura", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sakura&backgroundColor=ff9eb5", date: new Date('2026-04-04') },
      { id: uuidv4(), text: "Centering a div is still my final boss 😂", user: "Rock Lee", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=RockLee&backgroundColor=2d6a4f", date: new Date('2026-04-05') },
      { id: uuidv4(), text: "Vercel deployment is so smooth right?", user: "Kakashi", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Kakashi&backgroundColor=c0c0c0", date: new Date('2026-04-05') },
      { id: uuidv4(), text: "Next stop — full stack! 🔥", user: "Sasuke", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sasuke&backgroundColor=1a1a2e", date: new Date('2026-04-06') }
    ]
  },
  {
    id: 7,
    title: 'Silence. Grind. Succeed. 🖤',
    user: 'Sasuke ⚡',
    imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=400&fit=crop",
    content: 'Been silently grinding TypeScript and system design for 3 months. No posts, no noise — just pure focus. Today I cracked my first senior-level frontend interview. Silence is the best response to those who doubt you. 🖤 #TypeScript #SystemDesign #NeverSettle',
    likes: 215,
    date: new Date('2026-04-05'),
    tag: 'Career',
    isLiked: false,
    commentText: [
      { id: uuidv4(), text: "This is the most Sasuke thing ever 😂 Congrats tho!", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2026-04-05') },
      { id: uuidv4(), text: "Quietly becoming the GOAT 👏", user: "Kakashi", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Kakashi&backgroundColor=c0c0c0", date: new Date('2026-04-05') },
      { id: uuidv4(), text: "TypeScript + System Design is a deadly combo 🔥", user: "Sakura", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sakura&backgroundColor=ff9eb5", date: new Date('2026-04-06') },
      { id: uuidv4(), text: "Rival energy activated 😤", user: "Rock Lee", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=RockLee&backgroundColor=2d6a4f", date: new Date('2026-04-06') }
    ]
  },])

document.title="DevConnect"



// useEffect(() => {
//   localStorage.setItem("posts", JSON.stringify(allposts))
// }, [allposts])

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

  const addComment =(id,comment) =>{
    const updatedPostComment = allposts.map(each => {
      if (each.id === id) {
        return {
          ...each,
           commentText :[ ...each.commentText,comment]
        }

      }return each
    })
    setAllposts(updatedPostComment)
   
  }

  const onDeleteComment=(postId,comId)=>{

  const updatedComment = allposts.map(each => {
    if (each.id === postId) {
      return {
        ...each,
        commentText : each.commentText.filter(del => del.id !== comId) 
      }

    }return each
  })

  setAllposts(updatedComment)

  }
  

    return(
      <DevContext.Provider value={{allposts,onAddingPostToDB,onAddingLike,addComment,onDeleteComment}}>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/create-post" component={CreatePost} />
              <Route exact path="/post/:id" component={PostDetails}/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/tag/:id" component={Tags} />
        </Switch>

      </DevContext.Provider>
)}






export default App

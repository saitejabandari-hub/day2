import {Route,Switch} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import { useState ,useEffect } from 'react';
import Cookies from 'js-cookie'
import Register from "./components/Register"
import Login from './components/Login';
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import PostDetails from './components/PostDetails';
import Dashboard from './components/Dashboard'
import SavedPosts from './components/SavedPosts'
import Profile from './components/Profile'
import Tag from './components/Tag'
import Tags from './components/Tags'
import EditPost from './components/EditPost'
import EditProfile from './components/EditProfile'
import ProtectedRouter from './components/ProtectedRouter'
import './App.css';
import DevContext from './context/DevContext.js'

const App =() => {
  const [profile,setProfile]=useState(Cookies.get("user_id")|| '')
  const [rerender,setRender]=useState(false)

const [allposts, setAllposts] = useState([

  // ── 2023 ──────────────────────────────────────────────
  {
    id: 101,
    title: 'Hello World, Hello React! 🌍',
    user: 'Naruto 🥷',
    imgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    content: 'Just wrote my first React component today. It only renders "Hello World" but I am beyond proud. Every expert was once a beginner! 💪',
    likes: 8,
    date: new Date('2023-01-10'),
    tag: 'React',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Welcome to the React family!", user: "Sakura", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sakura&backgroundColor=ff9eb5", date: new Date('2023-01-10') },
      { id: uuidv4(), text: "It only goes up from here!", user: "Kakashi", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Kakashi&backgroundColor=c0c0c0", date: new Date('2023-01-11') },
    ]
  },
  {
    id: 102,
    title: 'Why I Quit My Job to Learn Coding 🔥',
    user: 'Rock Lee 🥊',
    imgUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&h=400&fit=crop",
    content: 'People thought I was crazy. 6 months later I have 3 job offers. The grind never lies. Believe in the process even when no one else does.',
    likes: 310,
    date: new Date('2023-01-18'),
    tag: 'Motivation',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Absolute legend 🔥", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2023-01-18') },
      { id: uuidv4(), text: "What stack did you learn?", user: "Shikamaru", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Shikamaru&backgroundColor=8d8d5b", date: new Date('2023-01-19') },
    ]
  },
  {
    id: 103,
    title: 'CSS Grid Changed My Life 🎨',
    user: 'Ino 🌸',
    imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    content: 'I used to float everything. Then Flexbox saved me. Then I discovered CSS Grid and ascended. Two-dimensional layouts are pure art. 🎨',
    likes: 55,
    date: new Date('2023-02-05'),
    tag: 'CSS',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Grid is magic!", user: "Sakura", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sakura&backgroundColor=ff9eb5", date: new Date('2023-02-06') },
    ]
  },
  {
    id: 104,
    title: 'My First Open Source Contribution 🎉',
    user: 'Shikamaru 🧠',
    imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    content: 'Fixed a typo in a popular library README. PR merged in 10 minutes. It was tiny but it felt like winning the Chunin exams. Start small. Start now.',
    likes: 44,
    date: new Date('2023-02-20'),
    tag: 'OpenSource',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Every PR counts!", user: "Kakashi", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Kakashi&backgroundColor=c0c0c0", date: new Date('2023-02-20') },
    ]
  },
  {
    id: 105,
    title: 'Building REST APIs with Express 🚀',
    user: 'Sakura 🌸',
    imgUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    content: 'Just built my first REST API! GET, POST, PUT, DELETE — all working. Connecting it to React frontend next. Full-stack life incoming! 🎉',
    likes: 38,
    date: new Date('2023-03-12'),
    tag: 'FullStack',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "What database are you using?", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2023-03-12') },
      { id: uuidv4(), text: "Full-stack Sakura is unstoppable!", user: "Rock Lee", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=RockLee&backgroundColor=2d6a4f", date: new Date('2023-03-13') },
    ]
  },
  {
    id: 106,
    title: 'Top 5 VS Code Extensions for React Devs 🔧',
    user: 'Kakashi 📖',
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    content: 'Prettier, ESLint, ES7 Snippets, Auto Rename Tag, GitLens. These 5 extensions will 10x your productivity. No cap. Save this post! 🔖',
    likes: 91,
    date: new Date('2023-04-01'),
    tag: 'Tips',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Adding GitLens right now!", user: "Choji", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Choji&backgroundColor=e76f51", date: new Date('2023-04-01') },
    ]
  },
  {
    id: 107,
    title: 'Got My First Dev Job 🎊',
    user: 'Choji 🍖',
    imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=400&fit=crop",
    content: '8 months of self-study. 47 applications. 12 interviews. 1 offer. Never giving up was the only strategy. Junior Frontend Developer starting Monday! 🎊',
    likes: 502,
    date: new Date('2023-05-14'),
    tag: 'Career',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Congrats!! You deserved it 🎉", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2023-05-14') },
      { id: uuidv4(), text: "47 applications and still going — respect 🙏", user: "Sasuke", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sasuke&backgroundColor=1a1a2e", date: new Date('2023-05-15') },
    ]
  },
  {
    id: 108,
    title: 'useContext vs Redux — What I Actually Think 🤔',
    user: 'Sasuke ⚡',
    imgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    content: 'For small apps, useContext is clean and simple. For complex state across many components, Redux Toolkit is worth the setup. Stop the war — use the right tool.',
    likes: 134,
    date: new Date('2023-06-22'),
    tag: 'React',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Finally someone said it 👏", user: "Kakashi", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Kakashi&backgroundColor=c0c0c0", date: new Date('2023-06-22') },
    ]
  },
  {
    id: 109,
    title: 'Stop Comparing Your Chapter 1 to Someone\'s Chapter 20 📖',
    user: 'Sensei',
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    content: 'Comparison is the thief of joy and progress. Everyone started from zero. Focus on your own growth, celebrate small wins, and keep building. 🌱',
    likes: 288,
    date: new Date('2023-07-07'),
    tag: 'Motivation',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Needed this today 🙏", user: "Ino", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Ino&backgroundColor=b6e3f4", date: new Date('2023-07-07') },
    ]
  },
  {
    id: 110,
    title: 'CSS Animations Are Pure Joy ✨',
    user: 'Ino 🌸',
    imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    content: 'Spent the whole evening playing with keyframes and transitions. My button now bounces, fades, and spins. Useless? Maybe. Fun? Absolutely. ✨',
    likes: 77,
    date: new Date('2023-08-15'),
    tag: 'CSS',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "CSS animations are underrated!", user: "Sakura", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sakura&backgroundColor=ff9eb5", date: new Date('2023-08-16') },
    ]
  },
  {
    id: 111,
    title: 'React Custom Hooks Are a Game Changer 🪝',
    user: 'Kakashi 📖',
    imgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    content: 'Extracted my fetch logic into a useFetch hook and suddenly my components are 40 lines shorter. Custom hooks are the DRY principle in its purest form.',
    likes: 109,
    date: new Date('2023-09-03'),
    tag: 'React',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "useFetch is my favorite hook now!", user: "Rock Lee", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=RockLee&backgroundColor=2d6a4f", date: new Date('2023-09-04') },
    ]
  },
  {
    id: 112,
    title: 'Tips for Crushing Your First Tech Interview 💼',
    user: 'Shikamaru 🧠',
    imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=400&fit=crop",
    content: '1. Think out loud. 2. Clarify the problem. 3. Start brute force then optimize. 4. Test your code. 5. Ask good questions at the end. Save this checklist!',
    likes: 178,
    date: new Date('2023-10-21'),
    tag: 'Tips',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "This is gold 🥇", user: "Choji", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Choji&backgroundColor=e76f51", date: new Date('2023-10-21') },
    ]
  },
  {
    id: 113,
    title: 'Contributed to My First Major OSS Project 🌍',
    user: 'Sasuke ⚡',
    imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    content: 'Submitted a bug fix to a library with 20k stars. PR reviewed by the maintainer himself. Open source is the best classroom on the internet.',
    likes: 96,
    date: new Date('2023-11-08'),
    tag: 'OpenSource',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "That is huge! Which library?", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2023-11-09') },
    ]
  },

  // ── 2024 ──────────────────────────────────────────────
  {
    id: 201,
    title: 'New Year, New Stack 🎆',
    user: 'Naruto 🥷',
    imgUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    content: '2024 goals: Master TypeScript, build a SaaS, contribute to OSS monthly. Writing it here so I commit to it. Hold me accountable fam! 🔥',
    likes: 145,
    date: new Date('2024-01-02'),
    tag: 'Motivation',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "We got you! Let's go! 🙌", user: "Sakura", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sakura&backgroundColor=ff9eb5", date: new Date('2024-01-02') },
    ]
  },
  {
    id: 202,
    title: 'Next.js 14 — First Impressions 🚀',
    user: 'Sasuke ⚡',
    imgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    content: 'Server components, server actions, streaming — Next.js 14 is a paradigm shift. The App Router finally clicked for me. The future of React IS Next.',
    likes: 211,
    date: new Date('2024-01-29'),
    tag: 'React',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "App Router took me a week to click too 😅", user: "Kakashi", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Kakashi&backgroundColor=c0c0c0", date: new Date('2024-01-30') },
    ]
  },
  {
    id: 203,
    title: 'Deployed My SaaS MVP 🎉',
    user: 'Sakura 🌸',
    imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    content: 'React frontend + Node backend + PostgreSQL + Stripe payments. It is live. It is real. My first SaaS product is in the wild. Terrifying and exhilarating! 🎉',
    likes: 334,
    date: new Date('2024-02-14'),
    tag: 'FullStack',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Stripe integration is always the scary part 😅", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2024-02-15') },
      { id: uuidv4(), text: "Drop the link! 👀", user: "Rock Lee", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=RockLee&backgroundColor=2d6a4f", date: new Date('2024-02-15') },
    ]
  },
  {
    id: 204,
    title: 'Tailwind CSS — Hot Take 🌶️',
    user: 'Ino 🌸',
    imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    content: 'I hated Tailwind for 2 weeks. Then something clicked. Now I cannot imagine writing CSS any other way. It is not ugly — it is just different. Give it 30 days.',
    likes: 192,
    date: new Date('2024-03-10'),
    tag: 'CSS',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Same experience, same conclusion 😂", user: "Shikamaru", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Shikamaru&backgroundColor=8d8d5b", date: new Date('2024-03-11') },
    ]
  },
  {
    id: 205,
    title: 'How to Write a Resume That Gets Callbacks 📄',
    user: 'Shikamaru 🧠',
    imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=400&fit=crop",
    content: 'One page. Quantified achievements. Tailored per role. ATS-friendly format. Clean layout. Your resume is a product — design it like one. 💼',
    likes: 256,
    date: new Date('2024-04-03'),
    tag: 'Career',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "The ATS tip is underrated!", user: "Choji", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Choji&backgroundColor=e76f51", date: new Date('2024-04-04') },
    ]
  },
  {
    id: 206,
    title: 'React Query Will Change How You Think About State 🔄',
    user: 'Kakashi 📖',
    imgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    content: 'Server state and client state are fundamentally different things. React Query handles server state so elegantly that you will wonder how you lived without it.',
    likes: 187,
    date: new Date('2024-05-18'),
    tag: 'React',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Replaced my entire Redux setup with React Query 🙌", user: "Sasuke", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sasuke&backgroundColor=1a1a2e", date: new Date('2024-05-19') },
    ]
  },
  {
    id: 207,
    title: 'The 5AM Developer Routine That Changed Everything ⏰',
    user: 'Rock Lee 🥊',
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    content: '5AM wake up. 30 min LeetCode. 1 hr project. 30 min learning. By 7AM I have done more than most do in a full day. Discipline > motivation. Every. Single. Time.',
    likes: 420,
    date: new Date('2024-06-25'),
    tag: 'Motivation',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "You are insane and I respect it 😂", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2024-06-25') },
    ]
  },
  {
    id: 208,
    title: 'Debug Like a Detective 🔍',
    user: 'Sensei',
    imgUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&h=400&fit=crop",
    content: 'Stop randomly changing code and hoping it works. Form a hypothesis. Isolate the variable. Test it. Read the stack trace. Console.log strategically. Think.',
    likes: 143,
    date: new Date('2024-07-14'),
    tag: 'Tips',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "This is exactly how senior devs debug 💯", user: "Kakashi", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Kakashi&backgroundColor=c0c0c0", date: new Date('2024-07-14') },
    ]
  },
  {
    id: 209,
    title: 'Docker for Frontend Devs — A Beginner\'s Guide 🐳',
    user: 'Shikamaru 🧠',
    imgUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    content: 'Containerizing my React app was easier than I thought. One Dockerfile, one docker-compose.yml, and my local env matches production exactly. No more "works on my machine"!',
    likes: 118,
    date: new Date('2024-08-02'),
    tag: 'FullStack',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Docker scared me for so long. This helps!", user: "Ino", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Ino&backgroundColor=b6e3f4", date: new Date('2024-08-03') },
    ]
  },
  {
    id: 210,
    title: 'Promoted to Mid-Level — What Changed 🚀',
    user: 'Choji 🍖',
    imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=400&fit=crop",
    content: 'One year as junior dev and just got promoted. What changed? I stopped asking "how do I do this?" and started asking "what is the best way to approach this?" Mindset shift.',
    likes: 398,
    date: new Date('2024-09-17'),
    tag: 'Career',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "That mindset shift is everything!", user: "Sakura", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sakura&backgroundColor=ff9eb5", date: new Date('2024-09-17') },
    ]
  },
  {
    id: 211,
    title: 'My OSS Project Hit 1k Stars ⭐',
    user: 'Sasuke ⚡',
    imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    content: 'Started as a personal utility library. Shared it on Reddit. 1000 stars in 3 months. Open source gives back in ways money cannot. Keep building in public.',
    likes: 567,
    date: new Date('2024-10-30'),
    tag: 'OpenSource',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Link it!!! 🌟", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2024-10-30') },
    ]
  },
  {
    id: 212,
    title: 'React 19 — What I Am Most Excited About ⚡',
    user: 'Naruto 🥷',
    imgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    content: 'Actions, useOptimistic, use() hook — React 19 is going to simplify so many patterns. The team keeps delivering. Excited for what is coming!',
    likes: 244,
    date: new Date('2024-11-12'),
    tag: 'React',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "use() is wild! Can't wait.", user: "Kakashi", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Kakashi&backgroundColor=c0c0c0", date: new Date('2024-11-13') },
    ]
  },
  {
    id: 213,
    title: 'Don\'t Wait Until You\'re Ready. Start Now. 🏁',
    user: 'Sensei',
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    content: 'You will never feel 100% ready. The tutorial is not a project. The course is not experience. Build something ugly. Ship it. Iterate. That is how you grow.',
    likes: 489,
    date: new Date('2024-12-01'),
    tag: 'Motivation',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Shipping ugly > polishing forever 🚀", user: "Rock Lee", imgUrl: "https://api.dicebear.com/7.x/bootts/svg?seed=RockLee&backgroundColor=2d6a4f", date: new Date('2024-12-01') },
    ]
  },
  {
    id: 214,
    title: 'CSS Container Queries Are Here 🎁',
    user: 'Ino 🌸',
    imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    content: 'Finally! Responsive design based on the container size, not the viewport. This is going to reshape how we build component libraries. Goodbye media query hacks!',
    likes: 163,
    date: new Date('2024-12-18'),
    tag: 'CSS',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "This changes everything for design systems!", user: "Shikamaru", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Shikamaru&backgroundColor=8d8d5b", date: new Date('2024-12-19') },
    ]
  },

  // ── 2025 ──────────────────────────────────────────────
  {
    id: 301,
    title: '2025 — The Year I Go Senior 🎯',
    user: 'Choji 🍖',
    imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=400&fit=crop",
    content: 'Mapped out my entire learning path for 2025. System design, DSA, architecture patterns, leading teams. Big goals require big commitment. Let us go!',
    likes: 201,
    date: new Date('2025-01-05'),
    tag: 'Career',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "We are rooting for you! 🙌", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2025-01-05') },
    ]
  },
  {
    id: 302,
    title: 'I Rewrote the Entire Frontend in React 😅',
    user: 'Sakura 🌸',
    imgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    content: 'Migrated a 3-year-old jQuery app to React over 6 weeks. Terrifying at first. Incredibly rewarding at the end. Legacy code is not a curse — it is experience.',
    likes: 278,
    date: new Date('2025-01-28'),
    tag: 'React',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "jQuery to React migration is a rite of passage 😂", user: "Kakashi", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Kakashi&backgroundColor=c0c0c0", date: new Date('2025-01-29') },
    ]
  },
  {
    id: 303,
    title: 'Building a Micro-SaaS Solo in 30 Days 🧪',
    user: 'Sasuke ⚡',
    imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    content: 'Day 30 update: Product live. First paying user on day 12. $140 MRR by end of month. Micro-SaaS is the purest form of validation. Build small, learn fast.',
    likes: 445,
    date: new Date('2025-02-15'),
    tag: 'FullStack',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "First paying user is the hardest milestone! Congrats!", user: "Sakura", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sakura&backgroundColor=ff9eb5", date: new Date('2025-02-16') },
    ]
  },
  {
    id: 304,
    title: 'Burnout Is Real — Take Care of Yourself 🛌',
    user: 'Rock Lee 🥊',
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    content: 'I preached the 5AM grind. Then crashed for 3 weeks. Rest is not a reward — it is maintenance. Sustainable pace > heroic sprints. Your health is your foundation.',
    likes: 612,
    date: new Date('2025-03-04'),
    tag: 'Motivation',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Thank you for being honest about this 🙏", user: "Ino", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Ino&backgroundColor=b6e3f4", date: new Date('2025-03-04') },
    ]
  },
  {
    id: 305,
    title: '10 Git Commands You Should Know by Heart 🌿',
    user: 'Shikamaru 🧠',
    imgUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&h=400&fit=crop",
    content: 'git stash, git rebase -i, git cherry-pick, git bisect, git reflog — these commands have saved me more times than I can count. Learn them before you need them.',
    likes: 203,
    date: new Date('2025-03-22'),
    tag: 'Tips',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "git reflog saved my life last week 😭", user: "Choji", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Choji&backgroundColor=e76f51", date: new Date('2025-03-23') },
    ]
  },
  {
    id: 306,
    title: 'How I Got a 40% Salary Raise 💰',
    user: 'Choji 🍖',
    imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=400&fit=crop",
    content: 'Got a competing offer. Went back to my current employer. Negotiated transparently. They matched + added 5%. Never leave money on the table. Always negotiate.',
    likes: 731,
    date: new Date('2025-04-10'),
    tag: 'Career',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Competing offer is the best negotiation tool 💼", user: "Sasuke", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sasuke&backgroundColor=1a1a2e", date: new Date('2025-04-10') },
    ]
  },
  {
    id: 307,
    title: 'OSS Maintainer Life — The Good, Bad, Ugly 🌍',
    user: 'Sasuke ⚡',
    imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    content: 'Good: community, impact, learning. Bad: unpaid weekend support. Ugly: entitled issues. Still worth it. Open source built my career and I would not trade it.',
    likes: 318,
    date: new Date('2025-05-17'),
    tag: 'OpenSource',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Entitled issue reporters are a special breed 😂", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2025-05-18') },
    ]
  },
  {
    id: 308,
    title: 'useTransition and Concurrent React — Finally Clicked 💡',
    user: 'Kakashi 📖',
    imgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    content: 'Wrapping a heavy state update in useTransition kept my UI responsive during a massive list filter. Concurrent features are not magic — they are deliberate priority management.',
    likes: 159,
    date: new Date('2025-06-08'),
    tag: 'React',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Priority management — perfect way to describe it!", user: "Shikamaru", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Shikamaru&backgroundColor=8d8d5b", date: new Date('2025-06-09') },
    ]
  },
  {
    id: 309,
    title: 'CSS :has() Selector Is a Superpower 🦸',
    user: 'Ino 🌸',
    imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    content: 'Style a parent based on its children — in pure CSS! With :has(), I eliminated an entire useState just to track "does this card have an image?". CSS keeps evolving. 🚀',
    likes: 222,
    date: new Date('2025-07-30'),
    tag: 'CSS',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Replaced JS logic with :has() last week and felt like a wizard 🧙", user: "Sakura", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sakura&backgroundColor=ff9eb5", date: new Date('2025-07-30') },
    ]
  },
  {
    id: 310,
    title: 'Shipped a Full-Stack AI Tool 🤖',
    user: 'Naruto 🥷',
    imgUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    content: 'Built an AI-powered code review tool using OpenAI API + Next.js + Prisma. Users can paste code and get instant feedback. 200 signups in the first week. Believe it! 🍥',
    likes: 589,
    date: new Date('2025-08-20'),
    tag: 'FullStack',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "This is the future of dev tools! 🤯", user: "Kakashi", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Kakashi&backgroundColor=c0c0c0", date: new Date('2025-08-21') },
    ]
  },
  {
    id: 311,
    title: 'You Do Not Need to Know Everything to Get a Job 🎯',
    user: 'Sensei',
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    content: 'Companies hire for potential and problem-solving just as much as existing knowledge. Know the fundamentals deeply. Show curiosity. Demonstrate you can learn. That is enough.',
    likes: 542,
    date: new Date('2025-09-11'),
    tag: 'Motivation',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Imposter syndrome gone for a day because of this 😌", user: "Choji", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Choji&backgroundColor=e76f51", date: new Date('2025-09-11') },
    ]
  },
  {
    id: 312,
    title: 'Code Review Etiquette — How to Give Feedback 🤝',
    user: 'Shikamaru 🧠',
    imgUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&h=400&fit=crop",
    content: 'Review the code, not the person. Ask questions instead of making demands. Praise good patterns explicitly. Suggest, do not dictate. Great code reviews build great teams.',
    likes: 314,
    date: new Date('2025-10-05'),
    tag: 'Tips',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Printing this and hanging it above my desk 😂", user: "Rock Lee", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=RockLee&backgroundColor=2d6a4f", date: new Date('2025-10-06') },
    ]
  },
  {
    id: 313,
    title: 'OSS Sprint Month — 10 PRs in 30 Days 🏃',
    user: 'Shikamaru 🧠',
    imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    content: 'Challenged myself to contribute 10 PRs to different open source projects this month. Docs, tests, bug fixes, features. Merged 8 of 10. Best learning month of my career.',
    likes: 187,
    date: new Date('2025-10-28'),
    tag: 'OpenSource',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "This is such a great challenge idea!", user: "Ino", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Ino&backgroundColor=b6e3f4", date: new Date('2025-10-29') },
    ]
  },
  {
    id: 314,
    title: 'Remote Work — 2 Years In, Honest Thoughts 💭',
    user: 'Rock Lee 🥊',
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    content: 'Pros: no commute, async freedom, focus time. Cons: isolation, blurred work-life lines, missing spontaneous hallway ideas. Structure your day like it matters — because it does.',
    likes: 397,
    date: new Date('2025-11-14'),
    tag: 'Career',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "The isolation part is real and undertalked 😔", user: "Ino", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Ino&backgroundColor=b6e3f4", date: new Date('2025-11-14') },
    ]
  },
  {
    id: 315,
    title: 'React Server Components Deep Dive 🌊',
    user: 'Sasuke ⚡',
    imgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    content: 'RSC is not just a feature — it is a mental model reset. Components that never ship JS to the client. Data fetching at the component level. Once it clicks, everything else feels old.',
    likes: 276,
    date: new Date('2025-12-02'),
    tag: 'React',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Mental model reset is the perfect description 🤯", user: "Sakura", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sakura&backgroundColor=ff9eb5", date: new Date('2025-12-03') },
    ]
  },

  // ── 2026 (original + new) ───────────────────────────
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
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "nice one", user: "Ino", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Ino&backgroundColor=b6e3f4", date: new Date('2026-04-01') },
      { id: uuidv4(), text: "Keep it up!", user: 'Shikamaru', imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Shikamaru&backgroundColor=8d8d5b", date: new Date('2026-04-02') },
    ]
  },
  {
    id: 2,
    title: 'Consistency is the Key 🔑',
    user: 'Sensei',
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    content: 'Consistency beats talent 🔥 Code every single day, even if it is just 30 minutes. Small steps compound into giant leaps.',
    likes: 25,
    date: new Date('2026-04-02'),
    tag: 'Motivation',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "This hit different today 🙏", user: "Ino", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Ino&backgroundColor=b6e3f4", date: new Date('2026-04-02') },
    ]
  },
  {
    id: 3,
    title: 'I Shipped My First Full-Stack App! 🎉',
    user: 'Sakura 🌸',
    imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    content: 'Just finished my first full-stack project! Frontend with React, backend with Node.js and Express. The feeling of seeing everything connected is indescribable. 💪',
    likes: 42,
    date: new Date('2026-04-02'),
    tag: 'FullStack',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "That's amazing! What database did you use?", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2026-04-02') },
    ]
  },
  {
    id: 4,
    title: 'The Power of Reusable Components 🧩',
    user: 'Kakashi 📖',
    imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    content: 'Pro tip: Always break your UI into small reusable components. It saved me hours of debugging this week. Component-driven development is a superpower. 🧩',
    likes: 87,
    date: new Date('2026-04-03'),
    tag: 'Tips',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "This is so true! Learned it the hard way 😅", user: "Sakura", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sakura&backgroundColor=ff9eb5", date: new Date('2026-04-03') },
    ]
  },
  {
    id: 5,
    title: 'Embrace the Debugging Struggle 🏋️',
    user: 'Rock Lee 🥊',
    imgUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&h=400&fit=crop",
    content: 'No shortcuts in coding! I spent 6 hours debugging only to find a missing semicolon 😂. But I learned more in those 6 hours than in any tutorial.',
    likes: 63,
    date: new Date('2026-04-03'),
    tag: 'Motivation',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Missing semicolon got me last week too 💀", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2026-04-03') },
    ]
  },
  {
    id: 6,
    title: 'First React App is LIVE on Vercel! 🌟',
    user: 'Naruto 🥷',
    imgUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    content: 'Just deployed my first React app to Vercel and it went LIVE! I remember when I could not even center a div. Never give up, believe it! 🌟',
    likes: 120,
    date: new Date('2026-04-04'),
    tag: 'React',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "Believe it! You did it! 🎉", user: "Sakura", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sakura&backgroundColor=ff9eb5", date: new Date('2026-04-04') },
    ]
  },
  {
    id: 7,
    title: 'Silence. Grind. Succeed. 🖤',
    user: 'Sasuke ⚡',
    imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=400&fit=crop",
    content: 'Been silently grinding TypeScript and system design for 3 months. Today I cracked my first senior-level frontend interview. Silence is the best response to doubt. 🖤',
    likes: 215,
    date: new Date('2026-04-05'),
    tag: 'Career',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "This is the most Sasuke thing ever 😂 Congrats!", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2026-04-05') },
    ]
  },
  {
    id: 401,
    title: 'CSS Layers — The Feature I Did Not Know I Needed 🎨',
    user: 'Ino 🌸',
    imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    content: '@layer finally brings order to the cascade wars. Base, components, utilities — explicit priority without !important hacks. My stylesheets have never been this clean.',
    likes: 148,
    date: new Date('2026-01-18'),
    tag: 'CSS',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "No more !important! 🎉", user: "Shikamaru", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Shikamaru&backgroundColor=8d8d5b", date: new Date('2026-01-19') },
    ]
  },
  {
    id: 402,
    title: 'OSS Mentorship — Giving Back 🌱',
    user: 'Sasuke ⚡',
    imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    content: 'Started mentoring first-time contributors in my OSS project. Watching someone get their first PR merged is better than any personal milestone. Pay it forward.',
    likes: 263,
    date: new Date('2026-02-08'),
    tag: 'OpenSource',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "This is what the community is all about 💙", user: "Sakura", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Sakura&backgroundColor=ff9eb5", date: new Date('2026-02-09') },
    ]
  },
  {
    id: 403,
    title: 'Performance Tips That Took My React App from 42 to 96 Lighthouse ⚡',
    user: 'Kakashi 📖',
    imgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    content: 'Code splitting, lazy loading, image optimization, memo where it counts, and removing unused deps. Performance is a feature — treat it like one from day one.',
    likes: 334,
    date: new Date('2026-03-01'),
    tag: 'Tips',
    isLiked: false,
    isSaved: false,
    commentText: [
      { id: uuidv4(), text: "42 to 96 is insane! Which tool did you profile with?", user: "Naruto", imgUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto&backgroundColor=ffcc00", date: new Date('2026-03-02') },
    ]
  },
])

document.title="DevConnect"


  const onGetprofile=(id)=>{
    setProfile(id)
     }

  const onAddingPostToDB=(value)=>{
      setAllposts(prev => [...prev , value])
  }

  const onRender=(id) =>{
    setRender(prev =>!prev)
  }
    return(
      <DevContext.Provider value={{allposts,profile,rerender,onAddingPostToDB,onRender,onGetprofile}}>
            <Switch>
              <ProtectedRouter exact path="/" component={Home} />
              <ProtectedRouter exact path="/create-post" component={CreatePost} />
              <ProtectedRouter exact path="/post/:id" component={PostDetails}/>
              <ProtectedRouter exact path="/dashboard" component={Dashboard}/>
              <ProtectedRouter exact path="/tag/:id" component={Tags} />
              <ProtectedRouter exact path="/savedposts" component={SavedPosts}/>
              <ProtectedRouter exact path="/profile" component={Profile}/>
              <ProtectedRouter exact path="/tags" component={Tag}/>
              <ProtectedRouter exact path="/edit-post/:id"  component={EditPost}/>
              <ProtectedRouter exact path="/EditProfile" component={EditProfile} />
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
        </Switch>

      </DevContext.Provider>
)}


export default App

import { useContext,useState,useEffect } from "react"
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts"
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import Loadspinner from '../Loadspinner'
import DevContext from '../../context/DevContext'
import './index.css'

const Tag =() =>{
    // const {allposts} = useContext(DevContext)
    const [allposts ,setAllposts]=useState([])
    const [load,setLoad]=useState(true)

    useEffect(()=>{

        const fetchposts = async () =>{
            const url = "http://localhost:3000/devconnect/posts"
        const  jwt = Cookies.get("jwt_token")
        const options = {
            method:"GET",
            headers :{
                Authorization:`Bearer ${jwt}`
            }
        }

        const response = await fetch(url,options)
        const data = await response.json()
        const updateposts = data.posts.map(each => (
            {
            commentsCount : each.commentsCount,
            content : each.content,
            id: each.id,
            likesCount : each.likesCount,
            name : each.name,
            tag : each.tag,
            title : each.title,
            date:each.created_at,
            imgUrl:each.image_url,
            users:each.user_id
            }
        ))
        const likedpostdetails = data.likesusers
        
        setAllposts(updateposts)
        }

        fetchposts()

        // setFilteredPost(allposts) // dummy data
    },[])




    const allTags = allposts.map(each => each.tag) // give all tags and tags are repeted if different posts has with same tags
    const fliteredtags = allTags.filter((item,index,all) => all.indexOf(item) === index) //give unique tags
    const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00c49f","#ff4d6d","#4dabf7"] // colours
    const proColors = [
  "#4e79a7", // blue
  "#f28e2b", // orange
  "#e15759", // red
  "#76b7b2", // teal
  "#59a14f", // green
  "#edc948", // yellow
  "#b07aa1", // purple
]

// const themeColors = [
//   "#f6a5c0", // soft pink (flower)
//   "#e87ea1", // deep pink
//   "#6ec1e4", // sky blue (leaves)
//   "#4fa3c7", // deeper blue
//   "#a8d5ba", // soft green leaf
//   "#fbd1a2", // light peach
//   "#c08497", // muted rose
// ]
   const alltagsandyear = allposts.map(each => {
            return {
                year :  new Date(each.date).getFullYear(),
                tag : each.tag
            } 
   })

   const result = {}

   const yearsandtagsupdate = alltagsandyear.map(each => { //once recall this method
                const year = each.year 
                const tag = each.tag 

                if (!result[year]){
                    result[year]={}
                }
                 if(!result[year][tag]){

                       result[year][tag]=0
                }
               result[year][tag] = result[year][tag] + 1
   })


    const data = Object.entries(result).map(each => { //once recall this method
      const year = each[0] 
      const tags = each[1]

      return {
        year,
        ...tags
      }
    })

 const DataFormatter = (number) => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
    return(
    <div className="tag-bgContainer">
        <NavBar/>
        <div className="tag-firstContainer">
            <Sidebar/>
            <div className="tag-secondContainer">
              <h1 className="tag-headding-container">TAGS</h1>
                 <ResponsiveContainer width="100%" height={500}>
                <BarChart
                  data={data}
                  margin={{
                    top: 5,
                  }}
                >
                  <XAxis
                    dataKey="year"
                    tick={{
                      stroke: "gray",
                      strokeWidth: 1,
                    }}
                  />
                  <YAxis
                    tickFormatter={DataFormatter}
                    tick={{
                      stroke: "gray",
                      strokeWidth: 0,
                    }}
                  />
                  <Legend
                    wrapperStyle={{
                      padding: 30,
                    }}
              />
              {fliteredtags.map((each,index) => (
                <Bar dataKey={each} name={each} fill={proColors[index% proColors.length]} barSize="20%" />
              ))}
            </BarChart>
                 </ResponsiveContainer>
                <ul className="tag-snips">
                  {fliteredtags.map(each => {
                    const alltagposts = allposts.filter(item => item.tag === each)
                return (
                    <Link to={`/tag/${each}`}>
                    <li className="tag-each-list">
                            <p>{each}</p>
                              <p>{alltagposts.length} Posts</p>
                      </li>
                    </Link>
                )     
                    })}
                </ul>
            </div>
        </div>
    </div>

)}

export default Tag
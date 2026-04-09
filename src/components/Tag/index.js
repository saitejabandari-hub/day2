import { useContext } from "react"
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
import DevContext from '../../context/DevContext'
import './index.css'

const Tag =() =>{
    const {allposts} = useContext(DevContext)
    const allTags = allposts.map(each => each.tag) // give all tags and tags are repeted if different posts has with same tags
    const fliteredtags = allTags.filter((item,index,all) => all.indexOf(item) === index) //give unique tags
   const alltagsandyear = allposts.map(each => {
            return {
                year :  new Date(each.date).getFullYear(),
                tag : each.tag
            } 
   })

   const onlyyears = alltagsandyear.map(each => each.year)
   const updatedyears = onlyyears.filter((item,index,array)=> index === array.indexOf(item) )
   const result = {}

   const yearsandtagsupdate = alltagsandyear.map(each => {
                const year = each.year 
                const tag = each.tag 

                if (!result[year]){
                    result[year]={}
                }
                 if(!result[year][tag]){

                       result[year][tag]=0

                }
                    result[year][tag]++
                

        
   })

   console.log(result)
  




    // const tagsBarchart = allposts.map(each => {
    //     const count =  allposts.filter(eachone => eachone.tag === each.tag)
    //     return {
    //         year : new Date(each.date).getFullYear(),
    //         tag : each.tag,
    //         counts : count.length
    //     }
    // }) 
    // console.log(tagsBarchart)
    // const tagsBarchatupdated = tagsBarchart.filter((item,index,array) => index === array.findIndex(each => each.tag === item.tag))
    // console.log(tagsBarchatupdated)


    const data = [
  {
    group_name: "Group A",
    boys: 200,
    girls: 400,
    lol:500,
  },
  {
    group_name: "Group A",
    boys: 800,
    girls: 400,
    lol:600,
  },
  {
    group_name: "Group B",
    boys: 3000,
    girls: 500,
     lol:900,
  },
  {
    group_name: "Group C",
    boys: 1000,
    girls: 1500,
     lol:500,
  },
  {
    group_name: "Group D",
    boys: 700,
    girls: 1200,
     lol:200,
  },
]

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
                 <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="group_name"
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
        <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
        <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" />
        <Bar dataKey="lol" name="lol" fill="#1f77b4" barSize="20%" />
      </BarChart>
      {fliteredtags.map(each => {
         const variable = allposts.filter(item => item.tag === each)
         return <BarChart
        data={data}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="group_name"
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
        <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
        <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" />
        <Bar dataKey="lol" name="lol" fill="#1f77b4" barSize="20%" />
      </BarChart>
                            } )}
                 </ResponsiveContainer>
            </div>
        </div>

    </div>

)}

export default Tag
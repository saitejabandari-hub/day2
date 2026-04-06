import React from 'react'

const DevContext = React.createContext({
    allposts:[],
    onAddingPostToDB:()=>{},
    onAddingLike:()=>{},
    addComment:()=>{}
})

export default DevContext

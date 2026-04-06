import React from 'react'

const DevContext = React.createContext({
    allposts:[],
    onAddingPostToDB:()=>{},
    onAddingLike:()=>{},
    addComment:()=>{},
    onDeleteComment:()=>{}
})

export default DevContext

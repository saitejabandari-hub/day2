import React from 'react'

const DevContext = React.createContext({
    allposts:[],
    onAddingPostToDB:()=>{},
    onAddingLike:()=>{}
})

export default DevContext

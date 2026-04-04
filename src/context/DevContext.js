import React from 'react'

const DevContext = React.createContext({
    allposts:[],
    onAddingPostToDB:()=>{}
})

export default DevContext

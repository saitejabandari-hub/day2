import{Route,Redirect} from 'react-router-dom'
import Cookies from'js-cookie'

const ProtectedRouter=(props)=>{
    const jwt = Cookies.get("jwt_token")
    if(jwt === undefined){
       return <Redirect to="/login"/>
    }else{
        return <Route {...props} />
    }
}

export default ProtectedRouter

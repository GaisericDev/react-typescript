import { Login } from "./Login"
import { PrivateProps } from "./PrivatePropsTypes"

export const Private = ({isLoggedIn, component:Component}:PrivateProps) => {
    if(isLoggedIn){
        return <Component name="Gaiseric"/>
    }else{
        return <Login/>
    }
}
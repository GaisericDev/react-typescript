import { ProfileProps } from "./ProfileTypes"

export type PrivateProps = {
    isLoggedIn:boolean,
    component:React.ComponentType<ProfileProps>
}
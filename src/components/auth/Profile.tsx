import { ProfileProps } from "./ProfileTypes"
export const Profile = ({name}:ProfileProps) => {
    return(
        <div>Private profile component. Name is {name}</div>
    )
}
import { PersonListProps } from "./PersonList.types"

export const PersonList = ({names}:PersonListProps) => {
    return(
        <div>
           {names.map(name => {
               return (
                   <h2 key={name.first}>{name.first} {name.last}</h2>
               )
           })}
        </div>
    )
}
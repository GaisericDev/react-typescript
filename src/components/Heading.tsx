import { HeadingProps } from "./Heading.types"
export const Heading = ({children}:HeadingProps) => {
    return(
        <h2>{children}</h2>
    )
}
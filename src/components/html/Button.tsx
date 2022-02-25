import { ButtonProps } from "./Button.Types"

export const CustomButton = ({variant, children, ...rest}: ButtonProps) => {
    return(
        <button className={`class-with-${variant}`} {...rest}>{children}</button>
    )
}
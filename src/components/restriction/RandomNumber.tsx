import { RandomNumberProps } from "./RandomNumberTypes"

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero,
}:RandomNumberProps) => {
    return(
        <div>
            {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
            {isZero && "zero"} 
        </div>
    )
}
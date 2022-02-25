import React from 'react'
import { TextProps } from './Text.Types'

export const Text = <E extends React.ElementType = "div">({size, color, children, as}: TextProps<E>) => {
    const Component = as || "div";
    return (
        <Component className={`class-with-${size}-${color}`}>{children}</Component>
    )
}

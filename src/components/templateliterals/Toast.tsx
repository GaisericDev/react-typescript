/**
 * Position can be one of 
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 * 
 */

import { ToastProps } from "./ToastTypes"

export const Toast = ({position}:ToastProps) => {
    return (
        <div>Toast Notification Position - {position}</div>
    )
}
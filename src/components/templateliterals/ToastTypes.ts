type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

export type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center"> | "center"
}
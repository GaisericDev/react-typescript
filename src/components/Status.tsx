import { StatusProps } from "./Status.types";

export const Status = ({status}:StatusProps) => {
    let message = "";
    if(status === "loading"){
        message = "Loading...";
    }
    else if(status === "success"){
        message = "Data fetched successfully!";
    }
    else if(status === "error"){
        message = "Error fetching data"
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}
import { GreetProps } from "./Greet.types";

export const Greet = ({isLoggedIn, name, messageCount = 0}:GreetProps) => {
    return(
        <div>
            <h2>
            {isLoggedIn ? `Welcome ${name}! You have ${messageCount} unread messages` : "Welcome guest!"}
            </h2>
        </div>
    );
}
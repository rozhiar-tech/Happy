import { forwardRef } from "react";

function Scrolling ({text}, ref){
    return(
        <h1 ref={ref}>{text}</h1>
        )
}

export default forwardRef(Scrolling);
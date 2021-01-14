import React, {InputHTMLAttributes} from "react"

import "./index.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    htmlFor: string;
}

const Input: React.FC<InputProps> = (props, ...rest) =>{
    return(
        <div className="input-block">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input id={props.htmlFor} {...rest}/>
        </div>
        
    );
}

export default Input;
import React from 'react'
import * as style from "./testing.module.css"

export default function template({children,data}){ 
    console.log(data);
    console.log(children);
    
    return(
    <div className={""}>
        <h1 className={style.title}>{"MIA"}</h1>
        <div className={style.content}>
            {"HI"}
        </div>
    </div>
    )
}

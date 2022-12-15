import React from 'react'
import * as style  from './card.module.css'

export default function Card({title,desc,foot}:{title:String,desc:String,foot:String}) {
    return (
    <div className={style.card}>
        <div className={style.heading}>
            <h2>{title}</h2>
        </div>    
        <div className={style.subtext}>
            <p>{desc}</p>
        </div>
        <div className={style.footer}>
            <h3>{foot}</h3>
        </div>
    </div>
    )
}

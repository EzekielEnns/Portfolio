import React from "react"
import { graphql, Link } from "gatsby"
import * as style from "./template.module.css"
import * as powerline from "./powerline.module.css"
import {Location} from "@reach/router";
import {Redirect} from "@reach/router"


export default function Template({type, children}) {
  return (
  <>
    <div>
      <div className={style.content}>
        <div className={style.mdx}> {children} </div>
      </div>
      {/*TODO do inifnite scroll here*/}
      <div className={style.content}>
        <div className={style.mdx}> {children} </div>
      </div>
      {/*End Example*/}
    </div>
    <div className={[style.nav, powerline.powerline, powerline.draculaBackground].join(' ')}>
        <span className={[powerline.front, powerline.draculaCyan].join(' ')}>
           <Link to="/about">About</Link> 
        </span> 
        <span className={[powerline.powerlineComponent, powerline.draculaOrange,powerline.notCurrent].join(' ')}>
           <Link to="/project">Projects</Link> 
        </span> 
        <span className={[powerline.powerlineComponent, powerline.draculaPurple, powerline.notCurrent].join(' ')}>
           <Link to="/Contact">Contact</Link> 
        </span> 
        <span className={[powerline.powerlineComponent,powerline.side ].join(' ')}>
           {'-- '+type+' --'}
        </span> 
    </div>
 </>)
}

//TODO install components needed for mdx (code displayer) 
//https://www.chartjs.org/docs/latest/samples/other-charts/radar-skip-points.html
//TODO make components for mdx (center text option)

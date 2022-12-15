import React from 'react'
import Card from "../components/Card.tsx";
import "./index.css"
import { Link } from "gatsby"

export default function index() {
    return(
    <div id="container">
        <h1>Ezekiel<br/> Enns</h1>
        <div id="cardHolder">
            <Link to="/SaySoComm/">
                <Card title="SaySo Communications" desc="
                    an ambious telehealth startup aiming to reveultionize speach theorpy by remotly connecting doctor to patient I was green as can be 
                    but I knew how to code and was ready to knock some socks." 
                    foot="Fullstack" />
            </Link>
            <Link to="/BrokedComputers/">
                <Card title="Broked Computers Inc" desc="
                I worked my way up from helping old ladies update windows, 
                to installing/setting up networks for small businesses to adminstarting servers and web servecies 
                " foot="IT Contractor" />
            </Link>
        </div>
    </div>
    )
}

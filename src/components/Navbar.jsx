import React from "react"
import Airbnb from "../assets/airbnb-icon.svg"
import "../css/style.css"


export default function Navbar() {
    return (
        <div>
            <header>
                <nav>
                    <img src={Airbnb} alt="Airbnb Logo" className="nav-logo" />
                </nav>
            </header>
        </div>
    )
}
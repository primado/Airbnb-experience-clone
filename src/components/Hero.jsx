import React from "react"
import GallaryGrid from "../assets/Group-grid.png"
import "../css/style.css"


export default function Hero() {
    return (
        <div>
            <section className="hero-section">
                <div className="container">
                    <div className="hero-img">
                        <img src={GallaryGrid} alt="Gallary Grid images" className="gallary-img" />
                    </div>
                    <div className="hero-content">
                        <h1>Online Experiences</h1>
                        <div className="heading-desc">
                            Join unique interactive activities 
                            led by one-of-a-kind hosts—all without leaving home.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
import React from "react";
import Star from "../assets/Star-1.png"
import Swimmer from "../assets/swimmer-12.png"
import "../css/style.css"


export default function Card() {
    return (
        <div>
            <section className="card-section">
                <div className="cards">
                    <div className="card-one">
                        <img src={Swimmer} alt="swimmer image" className="swimmer-img" />
                        <div className="card-content">
                            <div className="card-status">
                                <img src={Star} alt="Star image" className="star-img"/>
                                <span className="grey">5.0</span>
                                <span className="grey">(6) • </span>
                                <span className="grey"> USA</span>
                            </div>
                            <div className="other-content">
                                <p className="card-desc">Life lessons with Katie Zaferes</p>
                                <p className="card-price"><span className="bold">From $136</span> / person</p>                         </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
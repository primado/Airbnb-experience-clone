import React from "react";
import Star from "../assets/Star-1.png"
import "../data"
import "../css/style.css"


export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "Online"
    }

    return (
        <div>
            <section className="card-section">
                <div className="cards">
                    <div className="card-one">
                    {badgeText && <div className="card--badge">{badgeText}</div>}
                        <img src={`/images/${props.coverImg}`} alt="swimmer image" className="swimmer-img" />
                        <div className="card-content">
                            <div className="card-status">
                                <img src={Star} alt="Star image" className="star-img"/>
                                <span className="grey">{props.stats.rating}</span>
                                <span className="grey">({props.stats.reviewCount}) • </span>
                                <span className="grey"> {props.location}</span>
                            </div>
                            <div className="other-content">
                                <p className="card-desc">{props.title}</p>
                                <p className="card-price"><span className="bold">From ${props.price}</span> / person</p>                         </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
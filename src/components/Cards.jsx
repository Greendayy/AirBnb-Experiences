import React from "react";

export default function Card(props){
    let badgeText
    if(props.openSpots===0){
        badgeText="SOLD OUT"
    }else if(props.location==="Online"){
        badgeText="ONLINE"
    }
    
    return(
            <div className="card">
            {
                badgeText&&
                <div className="badge-text">{badgeText}</div>
            }
            <img src={`/images/${props.coverImg}`} 
            className="card-image"
            />
            <div className="card-stats">
                <img src="/images/star.png" className="card-star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})•</span>
                <span className="gray">{props.location}</span>
            </div>
                <p>{props.title}</p>
                <p className="price"><span className="bold">From ${props.price}</span>/person</p>
            </div>

            /* <div className="card">
            <img src="/public/images/wedding-photography.png" className="card-image"/>
            <div className="card-stats">
                <img src="/public/images/star.png" className="card-star"/>
                <span>5</span>
                <span className="gray">(30)</span>
                <span className="gray">•Online</span>
            </div>
                <p>Learn Wedding Photography</p>
                <p className="price"><span className="bold">From $125</span>/person</p>
            </div><div className="card">
            <img src="/public/images/mountain-bike.png" className="card-image"/>
            <div className="card-stats">
                <img src="/public/images/star.png" className="card-star"/>
                <span>4.8</span>
                <span className="gray">(2)</span>
                <span className="gray">•Norway</span>
            </div>
                <p>Group Mountain Biking</p>
                <p className="price"><span className="bold">From $50</span>/person</p>
            </div> */
   
    )
}
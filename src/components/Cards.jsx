import React from "react";

export default function Card(){
    return(
    <section>
        <div className="card-list">
            <div className="card">
            <img src="/public/images/katie-zaferes.png" className="card-image"/>
            <div className="card-stats">
                <img src="/public/images/star.png" className="card-star"/>
                <span>5</span>
                <span className="gray">(6)</span>
                <span className="gray">•Online</span>
            </div>
                <p>Life Lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span>/person</p>
            </div>
            <div className="card">
            <img src="/public/images/wedding-photography.png" className="card-image"/>
            <div className="card-stats">
                <img src="/public/images/star.png" className="card-star"/>
                <span>5</span>
                <span className="gray">(30)</span>
                <span className="gray">•Online</span>
            </div>
                <p>Learn Wedding Photography</p>
                <p><span className="bold">From $125</span>/person</p>
            </div><div className="card">
            <img src="/public/images/mountain-bike.png" className="card-image"/>
            <div className="card-stats">
                <img src="/public/images/star.png" className="card-star"/>
                <span>4.8</span>
                <span className="gray">(2)</span>
                <span className="gray">•Norway</span>
            </div>
                <p>Group Mountain Biking</p>
                <p><span className="bold">From $50</span>/person</p>
            </div>
        </div>
    </section>
    )
}
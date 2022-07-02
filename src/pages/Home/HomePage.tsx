import React from "react";
import "./HomePage.scss";
import HeadImg from "../../assets/armagheadon.png";

const HomePage = () => {
    return (
        <section className="home-page">
            <div className="home-content-wrapper">
                <div>
                    <img src={HeadImg} alt="armagheadon" />
                </div>
                <div>
                    <h1>Show me</h1>
                    <h1>What you got!</h1>
                </div>
            </div>
        </section>
    );
};

export default HomePage;

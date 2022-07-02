import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/RickAndMortyLogo";

function Navbar() {
    const [activemenu, setActivemenu] = useState("");
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
        setActivemenu(location.pathname);
    }, [location.pathname]);

    return (
        <nav>
            <div className="brand-col">
                <Link to="/">
                    <Logo />
                    {/* Rick &amp; Morty <span>FAN APP</span> */}
                </Link>
            </div>
            <ul className="menu-col">
                <li className={activemenu === "/games" ? "menu-selected" : ""}>
                    <Link to="/games">Play Game</Link>
                </li>
                <li className={activemenu === "/leaderboards" ? "menu-selected" : ""}>
                    <Link to="/leaderboards">Leaderboards</Link>
                </li>
                <li className={activemenu === "/about" ? "menu-selected" : ""}>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

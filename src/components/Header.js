import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btn,setBtn] = useState("login");
    const handleBtn = () => {
        btn === "login" ? setBtn("logout"):setBtn("login")
    }
    return (
        <div className='header'>
            <div className='logo'>
                <div className='logo-container'>
                    <img src={LOGO_URL}></img>
                    <h1 className='restaurant-name'>Order your favourite food from us</h1>
                </div>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <li>My Account</li>
                    <button onClick={handleBtn}>{btn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
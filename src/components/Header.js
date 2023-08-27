import { LOGO_URL } from "../utils/constants";


const Header = () => {
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
                    <li>Home</li>
                    <li>Order</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <li>My Account</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
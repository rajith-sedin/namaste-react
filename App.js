import React from 'react';
import  ReactDOM  from 'react-dom';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <div className='logo-container'>
                    <img src='https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018'></img>
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

const Body = () => {
    return (
        <div>
            <Search/>
            <div className='res-cards-container'>
                <ResCard resName="Renuka Foods" cusine="Biriyani - South Indian - Andhra" rating="4.8" deliveryTime="15min" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_h9jnbbU68EkTUiiSi1ETNwCf60_AztCALY5dmyJW-dIrOLbKGuqhbTBUjOVk6_N3-lw&usqp=CAU"/>
                <ResCard resName="KFC" cusine="Burger - Fastfoods - American" rating="4.1" deliveryTime="30min" img="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000"/>
            </div>
        </div>
    )
}

const Search = () => {
    return (
        <div className='search-container'>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
        </div>
    );
}

const ResCard = ({ resName, cusine, deliveryTime, rating, img }) => {
    return (
      <div className='res-card'>
        <div className='res-logo'>
          <img src={img} alt='Restaurant Logo' />
        </div>
        <div className='res-info'>
          <h3 className='res-name'>{resName}</h3>
          <p className='res-cuisine'>{cusine}</p>
          <p className='res-rating'>{rating}</p>
          <p className='res-delivery'>{deliveryTime}</p>
        </div>
      </div>
    );
  }
  


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
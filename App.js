import React from 'react';
import data from './data';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import {BrowserRouter , Route, Link} from 'react-router-dom';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");  //open sidebar on click event
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");  //close sidebar on click event
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
             <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                       &#9776;       {/*ASCII code for hamburger menu style */}
                    </button>
                    <Link to="/">Baby Elephant</Link>               {/* When u click on brand name,redirect to main page*/}
                </div>
                <div className="header-links">
                    <a href="cart.html"> Cart</a>   {/*go to users cart  when clicked*/}
                    <a href="signin.html">Sign-In</a>     {/* go to sign in  when clicked */}
                </div>
             </header>
             <aside className="sidebar">
               <h1>Shopping Categories</h1>
               <button className="sidebar-close-button" onClick={closeMenu}>x</button>
               <ul>
                 <li>
                   <a href="index.html">Pants</a>
                 </li>
                  <li>
                    <a href="index.html">Shirts</a>
                  </li>
               </ul>

             </aside>
            
             <main className="main">
                <div className="content">
                   <Route path="/product/:id" component={ProductScreen}/>   {/*creating routes for product details*/}
                  <Route path="/" exact={true} component={HomeScreen}/>
                </div>
             </main>
             <footer className="footer">
                All rights reserved.
             </footer>
      </div>
      </BrowserRouter>
      
    
  );
}

export default App;

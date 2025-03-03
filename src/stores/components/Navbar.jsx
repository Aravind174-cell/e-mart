

import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
const Navbar = () => {
  const {cartItems} =  useCart()
  return (
    <>
    <div className="navSection">
        <div className="title">
             <h2>E-Mart</h2>
        </div>

        <div className="search">
             <input type="text" placeholder="Search..." />
        </div>

        <div className="user-detail">
            SignIn/SignUp
        </div>
        <Link to="/cart">
        <div className="cart">Cart
          <span>
            {cartItems.length}
          </span>
        </div>
      
        </Link>
        
    </div>

      <div className="subMenu">
           <ul>
            <Link to='/ac'>
            <li>Ac</li>
            </Link>
             
             <Link to='/books'>
             <li>Books</li>
             </Link>
             
             <Link to='/computers'>
             <li>Computers</li>
             </Link>
             
             <Link to='/fridge'>
             <li>Fridge</li>
             </Link>
             
             <Link to= '/furniture'>
             <li>Furniture</li>
             </Link>
             
             <Link to='/kitchen'>
             <li>Kitchen</li>
             </Link>

             <Link to='/men'>
             <li>Men</li>
             </Link>
             
             <Link to='/mobile'>
             <li>Mobiles</li>
             </Link>
             
             

             <Link to='/speaker'>
             <li>Speaker</li>
             </Link>
             
             <Link to='/tv'>
             <li>Tv</li>
             </Link>
             
             <Link to='/watch'>
             <li>Watch</li>
             </Link>
             
             <Link to='/woman' >
             <li>Woman</li>
             </Link>
             
           </ul>
      </div>

    </>
  )
}

export default Navbar

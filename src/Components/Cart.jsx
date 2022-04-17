import React from 'react'
import "./Card.css"
const Cart = () => {
  return (
    <>
    <header>
        <div className='continue-shopping'>
            <h3>Continue Shoping</h3>
        </div>
    </header>
    <section>
        <h1>Shoping Cart</h1>
        <p className='total-items'>You have <span className='total-items-count'>7</span> items in shpoing cart</p>
    <div className='cart-item'>
        
    </div>
    </section>
    </>
  )
}

export default Cart
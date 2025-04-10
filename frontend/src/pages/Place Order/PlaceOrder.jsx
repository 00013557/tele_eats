import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
        </div>
        <input type="text" placeholder='Email Address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
            <input type="text" placeholder='District'/>
            <input type="text" placeholder='City'/>
        </div>
        <input type="text" placeholder='Phone Number' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
            <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>{getTotalCartAmount()} soums</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>{getTotalCartAmount()===0?0:10000} soums</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <b>Total</b>
                    <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+10000} soums</b>
                </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder

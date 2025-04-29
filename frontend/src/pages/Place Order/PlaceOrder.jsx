import React, { useContext, useState, useEffect } from 'react'
import './PlaceOrder.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'


import axios from 'axios';

const PlaceOrder = () => {

    const {getTotalCartAmount, token, food_list, cartItems, url} = useContext(StoreContext);

    const [data, setData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      district: "",
      city: "",
      phone: ""
  })

    const onChangeHandler = (event) => {
      const name = event.target.name
      const value = event.target.value
      setData(data => ({ ...data, [name]: value }))
    }

    const placeOrder = async (event) => {
      event.preventDefault();
      let orderItems = [];
      food_list.map((item)=>{
        if (cartItems[item._id]>0) {
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo)
        }
      })
      let orderData = {
        address:data,
        items:orderItems,
        amount:getTotalCartAmount() + 10000,
      }
      let response = await axios.post(url+"/api/order/place", orderData,{headers:{token}})
      if (response.data.success) {
        const {session_url} = response.data;
        window.location.replace(session_url);
      }
      else{
        alert("Error");
      }
      
    }

    const navigate = useNavigate();

    useEffect (() => {
      if (!token) {
        navigate('/cart')
      }
      else if(getTotalCartAmount()===0)
      {
        navigate('/cart')
      }
  }, [token])


  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First name' required />
          <input type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last name' required />
        </div>
          <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' required />
          <input type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' required />
        <div className="multi-fields">
            <input name='district' onChange = {onChangeHandler} value={data.district} type="text" placeholder='District' required/>
            <input name='city' onChange = {onChangeHandler} value={data.city} type="text" placeholder='City' required/>
        </div>
        <input name ='phone' onChange = {onChangeHandler} value={data.phone} type="text" placeholder='Phone Number' required />
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
                    <p>{getTotalCartAmount() === 0 ? 0 : 10000} soums</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <b>Total</b>
                    <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10000} soums</b>
                </div>
            </div>
            <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}
export default PlaceOrder

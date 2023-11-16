import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext)


  return (
    <Link to='/Cart' className='CartWidget' style={{display: totalQuantity> 0 ? 'block': 'none'}}>
      <img src="https://i.ibb.co/MkfWk01/basket-cart-icon-27.png" alt="Logo" className="logo" />

      {totalQuantity}

    </Link>
    // <div>
    // <img className='logo' src="https://i.ibb.co/vkndSCV/logo-removebg-preview.png" alt="Logo" />
    // </div>
  );
};

export default CartWidget;
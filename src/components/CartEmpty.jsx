import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          The cart is empty 
        </h2>
        <p>
          You haven't ordered any pizza yeat
          <br />
          To order pizza go to main page
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Turn back</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
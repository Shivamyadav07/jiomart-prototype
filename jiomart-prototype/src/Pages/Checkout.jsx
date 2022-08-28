import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, Spin, Alert } from 'antd';
import './Checkout.css';
import Basket from './Basket';
import { useHistory } from 'react-router';
import { updateCart } from '../../Redux/Products/actions';
const Checkout = ({ match, location, history }) => {
  const isAuth = useSelector((store) => store.Auth.isAuth);
  const dispatch = useDispatch();
  const [state, setState] = useState(0);
  const [cartDetails, setCartDetails] = useState({
    products: [],
    totalItems: 0,
    bill: 0,
    savings: 0,
  });
  useEffect(() => {
    if (state === 1) {
      var stateTime = setTimeout(() => {
        dispatch(updateCart('order-confirmed'));
        setState(2);
      }, 8000);
    }

    return () => {
      clearTimeout(stateTime);
    };
  }, [state]);

  const id = match.params.id;
  const cart = useSelector((store) => store.cart.cartItems);
  useEffect(() => {
    let bill = 0;
    let itemCount = 0;
    let tempSavings = 0;
    let items = [];

    if (cart) {
      for (let x in cart) {
        items.push(cart[x].product);
        let mrp = cart[x].product.mrp;
        if (!mrp) {
          mrp = cart[x].product.cost;
        }
        tempSavings += cart[x].quantity * mrp;
        bill += cart[x].quantity * cart[x].product.cost;
        itemCount = itemCount + 1;
      }
    }
    setCartDetails({
      totalItems: itemCount,
      bill: bill.toFixed(2),
      savings: tempSavings,
      products: items,
    });
  }, [cart]);

  return (
    <div className='container'>
      {id === 'payment' ? (
        <div style={{ minHeight: '100vh' }}>
          {state !== 2 ? (
            <div className='heading'>Payment Details</div>
          ) : (
            <div className='heading'>Order Confirmed</div>
          )}

          <div className='payment'>
            {state === 0 ? (
              <Radio>
                <div className='payment-option'>
                  <img
                    src='https://www.jiomart.com/msassets/images/jio-money.png'
                    alt='pay'
                  />
                  <span style={{ marginLeft: '25px', marginRight: '50px' }}>
                    Jio Money
                  </span>
                  <button
                    onClick={() => setState(1)}
                  >{`Pay ₹${cartDetails.bill}`}</button>
                </div>
              </Radio>
            ) : state === 1 ? (
              <div>
                <Spin tip='Loading...' delay={1000}>
                  <Alert
                    message='Please Wait while we confirm your payment'
                    description='This might take a few seconds.'
                    type='info'
                  />
                </Spin>
              </div>
            ) : (
              <div>
                <p>Thank you for shopping at JioMart.</p>
                <p>
                  {' '}
                  Your order{' '}
                  <span style={{ color: '#089cdb' }}>
                    15983533739052545M
                  </span>{' '}
                  is booked in JioMart.
                </p>
                <p>
                  You can also check the details and status of your order any
                  time in Your Account - Orders section in JioMart.
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className='dynamic-div'>
          {id === 'review' ? (
            <div className='heading'>Order Summary</div>
          ) : (
            <div className='heading'>{`My Cart(${cartDetails.totalItems})`}</div>
          )}
          {id === 'review' && (
            <div className='address-container'>
              <h2 style={{ fontFamily: 'jioBold' }}>Select Delivery Address</h2>
              <div className='address'>
                <div className='default-address'>
                  <Radio>
                    <p>Eve Holt</p>
                    <p>
                      E-99, Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Iure eum similique quis debitis corrupti ipsam
                      dicta, pariatur
                    </p>
                    <p>+91 - 9999999999</p>
                  </Radio>
                </div>
                <button>Change/ Add Address</button>
              </div>
            </div>
          )}

          <Basket cartDetails={cartDetails} />
        </div>
      )}
      <div className='pay-details'>
        {state !== 2 ? (
          <section className='bill'>
            <p style={{ fontFamily: 'jioBold', fontSize: '18px' }}>
              Payment Details
            </p>
            <div>
              <p>MRP Total</p>
              <p>₹{cartDetails.savings} </p>
            </div>
            <div>
              <p>Product Discount</p>
              <p>{-(cartDetails.savings - cartDetails.bill).toFixed(2)} </p>
            </div>
            <div>
              <p>Total Amount</p>
              <p>₹{cartDetails.bill} </p>
            </div>
            <div style={{ justifySelf: 'flex-end' }}>
              <p>{`You Save ₹${(cartDetails.savings - cartDetails.bill).toFixed(
                2
              )}`}</p>
            </div>
          </section>
        ) : null}
        {cartDetails.totalItems !== 0 && (
          <section className='pay-btn'>
            {id === 'review' ? (
              <button onClick={() => history.push('/checkout/payment')}>
                {'Make Payment'}
              </button>
            ) : id === 'cart' ? (
              <button
                onClick={() =>
                  isAuth
                    ? history.push('/checkout/review')
                    : history.push('/login')
                }
              >
                {'Place Order'}
              </button>
            ) : null}
          </section>
        )}
      </div>
    </div>
  );
};

export default Checkout;

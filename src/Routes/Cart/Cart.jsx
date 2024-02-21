import './Cart.css';
import HeadingTitle from '../../Components/HeadingTitle/HeadingTitle';
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';

const Cart = () => {
    const {cartItems,removeFromCart,addToCart} = useContext(CartContext);
    const totalPrice=cartItems.reduce((acc,cur)=>acc + cur.price * cur.quantity,0).toFixed(2)

  return (
    <section className='cart'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <HeadingTitle title={'your shopping cart'}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-8 col-md-12 col-sm-12'>
                    {
                        cartItems.map((item)=>(
                            <div className='col-lg-12' key={item.id}>
                                <div className='cart-box'>
                                    <div className='row'>
                                        <div className='col-lg-9 col-md-9 col-sm-12'>
                                            <div className='cart-info'>
                                                <img src={item.image} alt={item.title}/>
                                                <div className='cart-info-text'>
                                                    <h4>{item.title}</h4>
                                                    <p className='cart-info-desc'>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    </p>
                                                    <p className='cart-info-price'>${item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-12'>
                                            <div className='cart-box-quantity'>
                                                <button className='bi bi-plus-lg' onClick={()=>addToCart({...item,quantity:item.quantity + 1})}></button>
                                                <b>{item.quantity}</b>
                                                <button disabled={item.quantity <= 1} className='bi bi-dash-lg' onClick={()=>addToCart({...item,quantity:item.quantity - 1})}></button>
                                                <p className='cart-box-price'>
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </p>
                                                <i className='bi bi-trash-fill' onClick={()=>removeFromCart(item.id)}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='col-lg-4 col-md-12 col-sm-12'>
                    <div className='cart-table'>
                        <h4>Order Summary</h4>
                        <ul className='cart-list'>
                            <li>Subtotal <span>${totalPrice}</span></li>
                            <li>Shopping Cost <span>0</span></li>
                            <li>Discount <span>0</span></li>
                            <li>Total <span>${totalPrice}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cart

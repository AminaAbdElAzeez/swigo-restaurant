import './MenuContent.css';
import {data} from '../../Data/Data.js';
import HeadingTitle from '../HeadingTitle/HeadingTitle.jsx';
import { useContext } from 'react';
import CartContext from '../../Context/CartContext.js';

const MenuContent = () => {
    const {addToCart}=useContext(CartContext);

  return (
    <div className='menu-content'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <HeadingTitle title={'our menu'}/>
                </div>
            </div>
            <div className='row'>
                {
                    data.map((item)=>(
                        <div className='col-lg-4 col-md-6 col-sm-6' key={item.id}>
                            <div className='menu-content-box'>
                                <div className='menu-content-box-img'>
                                    <img src={item.image} alt={item.title}/>
                                </div>
                                <div className='menu-content-wrapper'>
                                    <h4>{item.title}</h4>
                                    <p className='menu-content-desc'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <p className='menu-content-price'>${item.price}</p>
                                    <button onClick={()=>addToCart({...item,quantity:1})}>Add to Cart<i className='bi bi-cart2'></i></button>
                                </div>
                            </div>
                        </div>
                    )).reverse()
                }
            </div>
        </div>
    </div>
  )
}

export default MenuContent

import HeadingTitle from '../HeadingTitle/HeadingTitle';
import './Special.css';
import {data} from '../../Data/Data.js'
import { useContext } from 'react';
import CartContext from '../../Context/CartContext.js';

const Special = () => {
    const {addToCart}=useContext(CartContext);

  return (
    <div className='special'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <HeadingTitle title={"Special Menu"}/>
                </div>
            </div>
            <div className='row'>
                {data.slice(0,4).map((item)=>(
                    <div className='col-lg-3 col-md-6 col-sm-6' key={item.id}>
                        <div className='special-box'>
                            <img src={item.image} alt={item.title}/>
                            <h4 className='special-title'>{item.title}</h4>
                            <p className='special-desc'>
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                            <p className='special-price'>${item.price}</p>
                            <button className='special-btn' onClick={()=>addToCart({...item,quantity:1})}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Special

import './MenuSlider.css';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import {data} from '../../Data/Data.js';
import { useContext } from 'react';
import CartContext from '../../Context/CartContext.js';

const MenuSlider = () => {
    const {addToCart}=useContext(CartContext);

  return (
    <div className='menu-slider'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <HeadingTitle title={"from our menu"}/>
                </div>
            </div>
            <div className='row'>
                {data.slice(15,19).map((item)=>(
                    <div className='col-lg-3 col-md-6 col-sm-6' key={item.id}>
                        <div className='menu-box'>
                            <img src={item.image} alt={item.title}/>
                            <div className='menu-box-layer'>
                                <h4>{item.title}</h4>
                                <p className='menu-desc'>
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                            <div className='menu-box-layer2'>
                                <div className='menu-info'>
                                    <h4>{item.title}</h4>
                                    <p className='menu-price'>${item.price}</p>
                                </div>
                                <i className='bi bi-cart2' onClick={()=>addToCart({...item,quantity:1})}></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MenuSlider

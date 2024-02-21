import './Info.css';
import image1 from '../../Assets/pic3.png';
import image2 from '../../Assets/pic4.png';
import image3 from '../../Assets/pic1.png';
import image4 from '../../Assets/label.png';

const Info = () => {
  return (
    <div className='info'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-md-12 col-sm-12'>
                    <div className='info-box'>
                        <h4>FRIDAY SPECIAL</h4>
                        <h3>TASTY BURGER</h3>
                        <div className='info-layer'>
                            <img src={image3} alt='info-img'/>
                        </div>
                        <div className='info-layer-2'>
                            <img src={image4} alt='layer-img'/>
                            <p className='info-off'>50% OFF</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-8 col-md-12 col-sm-12'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='info-box-2'>
                                <img src={image1} alt='info-img'/>
                                <div className='info-wrapper'>
                                    <h5>TODAY SPECIAL</h5>
                                    <h3 className='info-wrapper-title'>Nodels</h3>
                                    <h4>60% OFF</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='info-box-3'>
                                <h4>MUSHROOM</h4>
                                <h3>BURGER</h3>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='info-box-4'>
                                <img src={image2} alt='info-img'/>
                                <div className='info-wrapper-4'>
                                    <h5>FOR LIMITED TIME ONLY</h5>
                                    <h3 className='info-wrapper4-title'>35% Offer</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info

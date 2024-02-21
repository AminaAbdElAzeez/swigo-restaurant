import './TestimonialContent.css';
import image1 from '../../Assets/pic2 (5).jpg';
import image2 from '../../Assets/pic3 (6).jpg';
import image3 from '../../Assets/pic5 (2).jpg';
import HeadingTitle from '../HeadingTitle/HeadingTitle';


const TestimonialContent = () => {
  return (
    <div className='testimonial-content'>
        <div className='container'>
            <div className='row'>
                <HeadingTitle title={'Testimonial'}/>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='testimonial-img'>
                        <img src={image1} alt='testimonial'/>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='testimonial-info'>
                        <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </p>
                        <div className='testimonial-info-box'>
                            <div className='testimonial-info-box-wrapper'>
                                <h3>Carry Mint</h3>
                                <span>Food Expert</span>
                            </div>
                            <i className="bi bi-chat-right-quote-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='testimonial-info'>
                        <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </p>
                        <div className='testimonial-info-box'>
                            <div className='testimonial-info-box-wrapper'>
                                <h3>John Doe</h3>
                                <span>Food Expert</span>
                            </div>
                            <i className="bi bi-chat-right-quote-fill"></i>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='testimonial-img'>
                        <img src={image2} alt='testimonial'/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='testimonial-img'>
                        <img src={image3} alt='testimonial'/>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='testimonial-info'>
                        <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </p>
                        <div className='testimonial-info-box'>
                            <div className='testimonial-info-box-wrapper'>
                                <h3>Marn Kamk</h3>
                                <span>Food Expert</span>
                            </div>
                            <i className="bi bi-chat-right-quote-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialContent

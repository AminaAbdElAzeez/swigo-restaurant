import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 col-md-3 col-sm-6'>
                    <div className='footer-box'>
                        <h3>CONTACT</h3>
                        <ul>
                            <li><i className="bi bi-geo-alt"></i>Kkatpally, Hyderabad</li>
                            <li><i className="bi bi-telephone"></i>+91 987-654-3210</li>
                            <li><i className="bi bi-envelope"></i>info@example.com</li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6'>
                    <div className='footer-box'>
                        <h3>OUR LINKS</h3>
                        <ul>
                            <Link to='home'>home</Link>
                            <Link to='about'>about</Link>
                            <Link to='coming-soon'>coming-soon</Link>
                            <Link to='blog'>blog</Link>
                            <Link to='cart'>cart</Link>
                            <Link to='error-page'>error-page</Link>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6'>
                    <div className='footer-box'>
                        <h3>OUR SERVICES</h3>
                        <ul>
                            <li>Strategy & Research</li>
                            <li>Fast Delivery</li>
                            <li>Seat Reservation</li>
                            <li>Pickup In Store</li>
                            <li>Our Menu</li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6'>
                    <div className='footer-box'>
                        <h3>HELP CENTER</h3>
                        <ul>
                            <Link to='faq'>faq</Link>
                            <Link to='team'>team</Link>
                            <Link to='testimonial'>testimonial</Link>
                            <Link to='menu'>menu</Link>
                            <Link to='contact'>contact</Link>
                            <Link to='register'>register</Link>
                            <Link to='login'>login</Link>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <p className='copyright'>
                        Copyright 2024 All rights reserved. Crafted With ❤ by
                        <span>Amina AbdElAzeez</span>
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer

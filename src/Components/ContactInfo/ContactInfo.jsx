import HeadingTitle from '../HeadingTitle/HeadingTitle';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className='contact-info'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <HeadingTitle title={'contact'}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-3 col-md-3 col-sm-6'>
                    <div className='contact-info-box'>
                        <i className="bi bi-geo-alt"></i>
                        <h4 className='contact-info-box-title'>location</h4>
                        <p>6952 Shelley St</p>
                        <p>Melbource</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6'>
                    <div className='contact-info-box'>
                        <i className="bi bi-telephone"></i>
                        <h4 className='contact-info-box-title'>phone number</h4>
                        <p>+(800) 800-900-100</p>
                        <p>+222 33 567 8665</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6'>
                    <div className='contact-info-box'>
                        <i className="bi bi-envelope"></i>
                        <h4 className='contact-info-box-title'>email address</h4>
                        <p>Info@Webmail.com</p>
                        <p>Info@Example.web.com</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6'>
                    <div className='contact-info-box'>
                        <i className="bi bi-clock"></i>
                        <h4 className='contact-info-box-title'>open & closing</h4>
                        <p>Mon - Fri: 09:00am</p>
                        <p>to 07.00pm</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo

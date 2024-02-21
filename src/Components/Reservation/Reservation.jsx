import HeadingTitle from '../HeadingTitle/HeadingTitle';
import './Reservation.css';

const Reservation = () => {
  return (
    <div className='reservation'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <HeadingTitle title={'Reservation'}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <form className='reservation-form'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='reservation-form-item'>
                                    <label htmlFor='name'>Your Name : </label>
                                    <input type='text' placeholder='John Doe' id='name'/>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='reservation-form-item'>
                                    <label htmlFor='email'>Your Email : </label>
                                    <input type='email' placeholder='info#example.com' id='email'/>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='reservation-form-item'>
                                    <label htmlFor='number'>Your Number : </label>
                                    <input type='text' placeholder='0123456789' id='number'/>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='reservation-form-item'>
                                    <label htmlFor='Members'>Members : </label>
                                    <input type='text' placeholder='1 Person' id='Members'/>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12'>
                                <div className='reservation-form-item'>
                                    <label htmlFor='textarea'>Message : </label>
                                    <textarea placeholder='Hi, do you Have a moment to talk About !
                                    ' id='textarea' rows='3'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12'>
                                <div className='reservation-form-item'>
                                    <button>Book a Table</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reservation

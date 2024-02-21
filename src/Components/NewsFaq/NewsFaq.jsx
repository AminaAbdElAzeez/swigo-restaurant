import image from '../../Assets/pic1 (2).png';
import './NewsFaq.css';

const NewsFaq = () => {
  return (
    <div className='news-faq'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-5 col-md-5 col-sm-12'>
                    <div className='news-faq-img'>
                        <img src={image} alt='news-faq'/>
                    </div>
                </div>
                <div className='col-lg-7 col-md-7 col-sm-12'>
                    <div className='news-faq-left'>
                        <h3 className='news-faq-title'>Newsletter</h3>
                        <p>
                        We hope this newsletter finds you well. We are excited to announce some new additions to our menu that we think you'll love. Our culinary team has been
                        </p>
                        <form className='news-faq-form'>
                            <input type='email' placeholder='Enter Your Email' className='news-faq-input'/>
                            <button className='news-faq-btn'>submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsFaq

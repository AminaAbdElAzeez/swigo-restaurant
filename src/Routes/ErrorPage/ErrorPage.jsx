import './ErrorPage.css';
import image from '../../Assets/pizza.avif';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className='error-page'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='error-info'>
              <h2 className='error-number'>4</h2>
              <img src={image} alt='error-page' className='error-img'/>
              <h2 className='error-number'>4</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='error-desc'>
              <h4>Opps! Page not Found</h4>
              <p>Sorry. The page you are looking for is not found 😢</p>
              <Link to='home' className='error-btn'>Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage

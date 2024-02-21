import { Link } from 'react-router-dom';
import burger from '../../Assets/burger.png';
import './Top.css';
const Top = () => {
  return (
    <div className='top'> 
        <div className='row'>
            <div className='col-lg-6 col-md-7 col-sm-12'>
                <div className='top-left'>
                    <h1 className='top-title'>The Number <span>#1</span> Choice Your Hunger Solution</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    <Link to='contact' className='top-link'>Book a Table</Link>
                    <ul>
                        <li><i className="bi bi-cup-hot-fill"></i></li>
                        <li><i className="bi bi-cup-straw"></i></li>
                        <li><i className="bi bi-cake2-fill"></i></li>
                        <li><i className="bi bi-award"></i></li>
                        <li><i className="bi bi-gift-fill"></i></li>
                    </ul>
                </div>
            </div>
            <div className='col-lg-6 col-md-5 col-sm-12'>
                <div className='top-bg'>
                    <img src={burger} alt='burger-img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top

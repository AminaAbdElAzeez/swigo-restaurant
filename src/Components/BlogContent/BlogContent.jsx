import './BlogContent.css';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import image1 from '../../Assets/pic3 (3).jpg';
import image2 from '../../Assets/pic4 (1).jpg';
import image3 from '../../Assets/pic5 (1).jpg';
import image4 from '../../Assets/pic6 (1).jpg';
import image5 from '../../Assets/pic20.png';
import image6 from '../../Assets/pic2 (5).jpg';
import image7 from '../../Assets/pic5 (2).jpg';
import image8 from '../../Assets/pic3 (6).jpg';


const BlogContent = () => {
  return (
    <div className='blog-content'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <HeadingTitle title={'Blog'}/>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <div className='blog-img'>
                    <div className='blog-layer'>
                        <h4>Uncovering Taste of Tradition & Celebrating Timeless Recipes</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <div className='blog-answer'>
                    <h3>Restaurant Has The Answer</h3>
                    <ul className='blog-list'>
                        <li><i className="bi bi-person-fill"></i>by <span>john doe</span></li>
                        <li><i className="bi bi-calendar-week-fill"></i>26 Jan 2024</li>
                        <li><i className="bi bi-chat-dots-fill"></i>2.5K</li>
                    </ul>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className='blog-box'>
                        <div className='blog-box-content'>
                            <h5>
                            Create An Information Architecture That’s Easy To Use Way Precise Usability Considerations For Partially,
                            </h5>
                            <span className='blog-span'>Ronald M. Spino</span>
                        </div>
                        <i className="bi bi-chat-right-quote-fill"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
                <div className='blog-galary-img'>
                    <img src={image1} alt='blog-galary'/>
                    <div className='blog-galary-img-layer'>
                        <ul>
                            <li><i className="bi bi-facebook"></i></li>
                            <li><i className="bi bi-instagram"></i></li>
                            <li><i className="bi bi-twitter"></i></li>
                            <li><i className="bi bi-linkedin"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6'>
                <div className='blog-galary-img'>
                    <img src={image2} alt='blog-galary'/>
                    <div className='blog-galary-img-layer'>
                        <ul>
                            <li><i className="bi bi-facebook"></i></li>
                            <li><i className="bi bi-instagram"></i></li>
                            <li><i className="bi bi-twitter"></i></li>
                            <li><i className="bi bi-linkedin"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
                <div className='blog-galary-img'>
                    <img src={image3} alt='blog-galary'/>
                    <div className='blog-galary-img-layer'>
                        <ul>
                            <li><i className="bi bi-facebook"></i></li>
                            <li><i className="bi bi-instagram"></i></li>
                            <li><i className="bi bi-twitter"></i></li>
                            <li><i className="bi bi-linkedin"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6'>
                <div className='blog-galary-img'>
                    <img src={image4} alt='blog-galary'/>
                    <div className='blog-galary-img-layer'>
                        <ul>
                            <li><i className="bi bi-facebook"></i></li>
                            <li><i className="bi bi-instagram"></i></li>
                            <li><i className="bi bi-twitter"></i></li>
                            <li><i className="bi bi-linkedin"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <div className='blog-galary-img'>
                    <img src={image5} alt='blog-galary'/>
                    <div className='blog-galary-img-layer'>
                        <ul>
                            <li><i className="bi bi-facebook"></i></li>
                            <li><i className="bi bi-instagram"></i></li>
                            <li><i className="bi bi-twitter"></i></li>
                            <li><i className="bi bi-linkedin"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <div className='blog-comments'>
                    <img src={image6} alt='blog-comments'/>
                    <div className='blog-comment-wrapper'>
                        <h5>Monsur Rahman Lito</h5>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <div className='blog-comments'>
                    <img src={image7} alt='blog-comments'/>
                    <div className='blog-comment-wrapper'>
                        <h5>Jake Johnson</h5>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <div className='blog-comments'>
                    <img src={image8} alt='blog-comments'/>
                    <div className='blog-comment-wrapper'>
                        <h5>John Doe</h5>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogContent

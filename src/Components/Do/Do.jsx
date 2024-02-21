import HeadingTitle from '../HeadingTitle/HeadingTitle';
import './Do.css';

const Do = () => {
  return (
    <div className='do'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <HeadingTitle title={'What We Do?'}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-3 col-md-3 col-sm-6'>
                    <div className='do-box'>
                        <i className="bi bi-cup-straw"></i>
                        <h3 className='do-title'>Fresh Products</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        </p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6'>
                    <div className='do-box'>
                        <i className="bi bi-cake2"></i>
                        <h3 className='do-title'>Skilled Chefs</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        </p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6'>
                    <div className='do-box'>
                        <i className="bi bi-cup-hot"></i>
                        <h3 className='do-title'>Best Bar</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        </p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6'>
                    <div className='do-box'>
                        <i className="bi bi-patch-check"></i>
                        <h3 className='do-title'>Vegan Cuisine</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Do

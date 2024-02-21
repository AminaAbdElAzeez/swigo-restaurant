import HeadingTitle from '../HeadingTitle/HeadingTitle';
import './Quality.css';

const Quality = () => {
  return (
    <div className='quality'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <HeadingTitle title={"quality service's"}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                    <div className='quality-box quality-1'>
                        <i className="bi bi-shop"></i>
                        <h3 className='quality-box-title'>restaurant</h3>
                        <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                    <div className='quality-box quality-2'>
                        <i className="bi bi-cup-straw"></i>
                        <h3 className='quality-box-title'>bar</h3>
                        <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                    <div className='quality-box quality-3'>
                        <i className="bi bi-cup-hot-fill"></i>
                        <h3 className='quality-box-title'>cafe</h3>
                        <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                    <div className='quality-box quality-4'>
                        <i className="bi bi-cake2-fill"></i>
                        <h3 className='quality-box-title'>dessert</h3>
                        <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quality

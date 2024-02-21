import './Invite.css';
import video from '../../Assets/16214ef02b1d8ae237bc719cf2e5ae11.mp4';

const Invite = () => {
  return (
    <div className='invite'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <h3 className='invite-title'>We Invite you to Visit Our Restaurant</h3>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <video controls autoPlay loop muted className='video'>
                        <source src={video}></source>
                    </video>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Invite

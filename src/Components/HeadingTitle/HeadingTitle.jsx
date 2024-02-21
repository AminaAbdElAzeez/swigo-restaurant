import './HeadingTitle.css';

const HeadingTitle = ({title}) => {
  return (
    <div className='heading-title'>
        <h2>swigo</h2>
        <h3 className='heading-top-title'>{title}</h3>
    </div>
  )
}

export default HeadingTitle

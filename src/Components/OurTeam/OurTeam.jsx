import HeadingTitle from '../HeadingTitle/HeadingTitle';
import './OurTeam.css';
import {team} from '../../Data/Team.js'
import { useState } from 'react';

const OurTeam = () => {
    const [search,setSearch] = useState("")

  return (
    <div className='our-team'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <HeadingTitle title={'our team'}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <input type='search' placeholder='Search in Our Team...' className='our-team-input'
                    value={search} onChange={(e)=>setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className='row'>
                {
                    team.filter(a=>a.name.toLowerCase().includes(search)).map((item)=>(
                        <div className='col-lg-3 col-md-3 col-sm-6' key={item.id}>
                            <div className='our-team-box'>
                                <div className='our-team-box-img'>
                                    <img src={item.image} alt='our-team'/>
                                </div>
                                <h5>{item.name}</h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default OurTeam

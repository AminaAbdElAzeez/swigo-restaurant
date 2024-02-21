import React from 'react'
import ContactTop from '../../Components/ContactTop/ContactTop'
import ContactInfo from '../../Components/ContactInfo/ContactInfo'
import Reservation from '../../Components/Reservation/Reservation'

const Contact = () => {
  return (
    <section className='contact'>
      <ContactTop/>
      <ContactInfo/>
      <Reservation/>
    </section>
  )
}

export default Contact

import React from 'react'
import Quality from '../../Components/Quality/Quality'
import Top from '../../Components/Top/Top'
import MenuSlider from '../../Components/MenuSlider/MenuSlider'
import Special from '../../Components/Special/Special'
import Info from '../../Components/Info/Info'

const Home = () => {
  return (
    <section className='home'>
      <Top/>
      <Info/>
      <Quality/>
      <MenuSlider/>
      <Special/>
    </section>
  )
}

export default Home

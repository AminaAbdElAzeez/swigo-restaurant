import FaqTop from '../../Components/FaqTop/FaqTop';
import AccordionFaq from '../../Components/AccordionFaq/AccordionFaq';
import NewsFaq from '../../Components/NewsFaq/NewsFaq';

const Faq = () => {
  return (
    <section className='faq'>
      <FaqTop/>
      <AccordionFaq/>
      <NewsFaq/>
    </section>
  )
}

export default Faq

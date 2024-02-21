import Accordion from 'react-bootstrap/Accordion';
import './AccordionFaq.css';
import HeadingTitle from '../HeadingTitle/HeadingTitle';

function AccordionFaq() {
  return (
    <div className='accordion-faq'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12-col-md-12 col-sm-12'>
                    <HeadingTitle title={'Faq'}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Q1: What are your hours of operation?</Accordion.Header>
                            <Accordion.Body>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Q2: What is your menu like?</Accordion.Header>
                            <Accordion.Body>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Q3: Do you have gluten-free options?</Accordion.Header>
                            <Accordion.Body>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Q4: Do you offer takeout or delivery?</Accordion.Header>
                            <Accordion.Body>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Q5: Can I make a reservation?</Accordion.Header>
                            <Accordion.Body>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Q6: Is your restaurant kid-friendly?</Accordion.Header>
                            <Accordion.Body>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Q7: What is your menu like?</Accordion.Header>
                            <Accordion.Body>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AccordionFaq;
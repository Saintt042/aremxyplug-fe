import React from 'react';
import { Container } from './WhyChooseUsStyle';
import Choicecard from './Choicecard';

const WhyChooseUs = () => {
  const dataList = [
    {
      header: "Reliable",
      details: "We use the technology to provide business solutions that open up new possibilities, boost your company's productivity and also enhance communication. Our work is recognized for its quality.",
    },
    {
      header: "Trusted",
      details: "We have built a reputation as a trusted service provider by delivering high-quality services with honesty, integrity and transparency. Our customers put their trust in us to always look out for their needs and safeguard their best interests.",
    },
    {
      header: "Affordable",
      details: "We offer competitive and affordable pricing to ensure that our services are accessible to everyone. There are no unexpected charges or hidden costs in our pricing structure.",
    },
    {
      header: "Swift 24/7 Delivery",
      details: "We offer swift 24/7 delivery to ensure that your needs are met promptly and efficiently. Our delivery services are reliable and efficient and we guarantee that your orders will be delivered on time.",
    },
    {
      header: "Secure and Automated",
      details: "We take confidentiality and security seriously. We use the latest security protocols and technologies to protect your data and information from unauthorized access or theft",
    },
    {
      header: "Customer Support",
      details: "We value your feedback and strive to provide exceptional customer support. When you need help, our team ishere to respond to your questions, handle your problems and offer direction.",
    },
  ]
  return (
    <Container>
     <div className="cont__wrapper">
     <div className="why">
     <h1 className='title'>Why Choose Us?</h1>
     <p className='title__text'>We are a company that provides telecommunications and digital services. Finding reliable service providers was one of the challenges of the digital age. We worked hard to obtain the best, which we are now giving to you. The team at AremxyPlug is made up of a variety of individuals who share the traits of resilience and problem-solving abilities. As a result, we made the decision to pool our resouces ad develop a platform that offers services for your digital needs.</p>
     </div>
    <section className="bodylayout">
      {dataList.map((item, indx) => (
        <Choicecard key={indx} header={item.header} details={item.details} />
      ))}
    </section>
     </div>
    </Container>
  )
}

export default WhyChooseUs
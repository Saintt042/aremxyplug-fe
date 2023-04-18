import React from 'react'
import { ServicesContainer } from './ServiceStyle'
import { Link } from 'react-router-dom'
import { ServiceData } from './ServiceData'

const Services = () => {
    const ServiceItem =({serviceItem:{subheading, subheadingText, subheadingLink}})=> {
        return (
            <div className="service-item">
                <h2>{subheading}</h2>
                <p>{subheadingText}</p>
                <div className="service-item--link">
                    <Link to={`${subheadingLink}`}>Explore</Link>
                </div>
            </div>
        )
    }
  return (
    <ServicesContainer>
        <div className="service-header">
            <div className="service-header--text">
                <h2>Our Services</h2>
                <p>
                    At AremxyPlug, we're dedicated to providing high-quality services 
                    to help you achieve your goals. Contact us today to learn more about our 
                    services and how we can help you achieve your goals.
                </p>
            </div>
            <div className="service-header--image">
                images
            </div>
        </div>
        <div className="service-content">
            { ServiceData.map((item) => (
                <ServiceItem key={item.id} serviceItem={item}/>
            ))}
        </div>
    </ServicesContainer>
  )
}

export default Services

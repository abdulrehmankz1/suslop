import React from 'react'
import GetInTouch from './components/GetInTouch'
import CTA from '../components/CTA'

const ContactUs = () => {
  return (
    <>
      <GetInTouch />
           <CTA
        heading="Let’s Build Something That Lasts"
        description="Whether you’re at the planning stage or ready to deliver, our team is here to help turn your goals into measurable outcomes."
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
        secondaryBtnText="Schedule a Consultation"
        secondaryBtnLink="/consultation"
      />
    </>
  )
}

export default ContactUs

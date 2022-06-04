import React from 'react'
import './offer.css'

const Offer = () => {
  return (
    <div className='offer__container'>
        <div className='offer__upgrade'>Upgrade now</div>
        <div className='offer__content'><b>Get 20% off</b> if you upgrade within 24h, use the code <b>20TODAY</b> at checkout 🎉</div>
        <div className='progress1'>
          <div className="progress__content">
            <p><b>Free Trial</b></p>
            <div className='out'><p><b>0</b> out of 10 credits used</p></div>
          </div>
          <div className="status"></div>
        </div>
    </div>
  )
}

export default Offer
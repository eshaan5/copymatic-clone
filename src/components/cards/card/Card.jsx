import React from 'react'
import { BiTable } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'
import './card.css'
import 'tachyons'


const Card = () => {
  return (
    <div className='card grow'>
        <div style={{display: 'flex', flexDirection: 'row', marginBottom: '1rem', marginTop: '0.5rem'}}>
        <BiTable size={21} style={{color: 'green', background: 'rgb(230, 252, 244)', borderRadius: '1rem'}} />
        <AiFillStar size={21} style={{marginLeft: 'auto', color: 'yellow'}} />
        </div>
        <h5>Blog Post Writer</h5>
        <p>Write blog articles in minutes with the most advanced AI writing assistant.</p>
    </div>
  )
}

export default Card
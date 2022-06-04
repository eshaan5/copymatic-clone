import React, { useState } from 'react'
import './filter.css'
import { AiOutlineSearch } from 'react-icons/ai'

const Filter = () => {

    const [filActive, setFilActive] = useState('#')

  return (
    <div className='filter__container'>
        <div className={filActive === '#' ? 'filter__item filactive' : 'filter__item'} onClick={() => setFilActive('#')}>All</div>
        <div className={filActive === '#blog' ? 'filter__item filactive' : 'filter__item'} onClick={() => setFilActive('#blog')}>Blog Content</div>
        <div className={filActive === '#web' ? 'filter__item filactive' : 'filter__item'} onClick={() => setFilActive('#web')}>Website copy {'&'} SEO</div>
        <div className={filActive === '#social' ? 'filter__item filactive' : 'filter__item'} onClick={() => setFilActive('#social')}>Social media {'&'} Ads</div>
        <div className={filActive === '#marketing' ? 'filter__item filactive' : 'filter__item'} onClick={() => setFilActive('#marketing')}>Marketing</div>
        <div className={filActive === '#more' ? 'filter__item filactive' : 'filter__item'} onClick={() => setFilActive('#more')}>More Tools</div>
        <div className={filActive === '#search' ? 'filter__item filactive' : 'filter__item search'} onClick={() => setFilActive('#search')}><AiOutlineSearch size={21} /></div>
    </div>
  )
}

export default Filter
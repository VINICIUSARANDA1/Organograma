import React from 'react'
import './banner.css'
import imageBanner from '../../Images/banner.png'

export default function Banner() {
  return (
    <>
  <header className='banner'>
    <img className='imageBanner' src={imageBanner} alt="Banner" />
    </header>
    </>
  )
}

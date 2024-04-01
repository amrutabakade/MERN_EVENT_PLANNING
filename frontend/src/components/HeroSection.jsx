// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Link} from "react-scroll";
export const HeroSection = () => {
  return (
    <section className='hero'>
      <img src='https://th.bing.com/th/id/R.af93f5e65941aa852831402270da10df?rik=z4EQyo9zuN%2b8fw&riu=http%3a%2f%2fwww.manxeon.com%2fuploads%2f5%2f7%2f4%2f4%2f5744459%2fevent-management2_orig.jpg&ehk=lwedOXxa%2bGVuT%2fd1PMHebjgXyt9JVPcMuLPLu5t9JrI%3d&risl=&pid=ImgRaw&r=0' />
      <div className='item'>
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Personal Dream Maker</h1>
          <p>We believe that it is all about the BIG DREAMS and the small deatails</p>
          <Link to='contact' spy={true} smooth={true} duration={500}>BOOK NOW</Link>
        </div>
      </div>
    </section>
  )
}

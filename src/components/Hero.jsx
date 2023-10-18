import React from 'react'
import {motion} from 'framer-motion'; 

import { styles } from '../styles';

import Spline from '@splinetool/react-spline';

import { leyna } from '../assets';

const Hero = () => {


  return (
    <section className='h-screen '>
      <div className='flex  md:flex-row flex-col  pt-[120px] '>
        <div className={` md:pl-[100px] pl-[50px]  md:w-[700px] w-[400px] `}>
              <h1 className={`${styles.heroHeadText}  text-white`}>
                Front-End <span className='text-[#b02fb3]'>React</span> Developer.
              </h1>
              <p className={`${styles.heroSubText}  mt-2 text-white-100`} >
                Hey👋, I'm Yousra Lina Boudchicha. A passionate Front-end React Developer based in Algeria  &#x1F4CD;  <br className='sm:block hidden' />
              </p>
          </div>
          <div className=' md:w-[800px] sm:w-[500px] h-auto z-[-10] '>
            <img src={leyna} alt='leyna '/>
          </div>
      </div>    
    </section>
  )
}

export default Hero
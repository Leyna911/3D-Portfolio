import React from 'react'
import {motion} from 'framer-motion'; 

import { styles } from '../styles';

import Spline from '@splinetool/react-spline';

import { leyna } from '../assets';

const Hero = () => {


  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='flex  flex-row sm:flex-col gap-[150px]  '>
        <div className={` pl-[100px] absolute inset-0 top-[200px] max-w-7xl  flex flex-row items-start gap-5`}>
            <div>
              <h1 className={`${styles.heroHeadText} w-[700px] text-white`}>
                Front-End <span className='text-[#b02fb3]'>React</span> Developer.
              </h1>
              <p className={`${styles.heroSubText} md:w-[700px] w-[400px] mt-2 text-white-100`} >
                Hey👋, I'm Yousra Lina Boudchicha. A passionate Front-end React Developer based in Algeria  &#x1F4CD;  <br className='sm:block hidden' />
              </p>
            </div>
          </div>
          <div className='absolute md:top-[100px] md:right-[20px] bottom-[20px] right-[0px] md:w-[1000px] h-auto z-[-10] '>
            <img src={leyna} alt='leyna '/>
          </div>
      </div>    
    </section>
  )
}

export default Hero
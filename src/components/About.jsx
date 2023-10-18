import React from 'react'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion';

import { SectionWrapper } from '../hoc'


const ServiceCard = ({index,title,icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          ABOUT ME
        </p>
        <h2 className={`${styles.sectionHeadText} md:w-[800px] `}>
          A dedicated Front-end Developer based in Algeria &#x1F4CD;
        </h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-white text-[17-px] max-w-3xl leading-[30px]'
      >
        I am Yousra Lina Boudchicha a computer engineering student majoring in Artificial intelligence and Data Science. As a junior Front-end Developer, I possess an impresive arsenal of skills in HTML, CSS, Javascript, ReactJs, ThreeJs, Tailwind Css .I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge developement tools and techniques. I am also a team player who thrives in leadership and collaborating with cross-functional teams to produce outstanding web applications. 
        </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"About");
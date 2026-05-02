import React from 'react';
import {Tilt} from 'react-tilt';
import { motion, scale } from 'framer-motion';

import styles from '../style.js';
import {services} from '../constants';
import {fadeIn , textVariant} from '../utils/motion';

import {SectionWrapper} from '../hoc';


const ServiceCard = ({index , title , icon})=>{
  return(
      <Tilt className="xs: w-[250px] ">
        <motion.div 
        variants={fadeIn("right", "spring" , 0.5 * index,0.75)}
        className='w-full green-pink-gradient p-[1px] 
        rounded-[20px] shadow-card'>
           
           <div options={{
            max:45,
            scale:1,
            speed:450
           }}
           className='bg-[#151030] rounded-[20px] 
           py-5 px-12 min-h-[280px] flex 
           justify-evenly items-center flex-col '>

            <img src={icon} alt={title}
            className='w-16 h-16 object-contain'>
            </img>
            <h3 className='text-white text-[20px] 
            font-bold text-center'>
                {title}
            </h3>

           </div>
        </motion.div>

      </Tilt>
  )
}


 function About(){
    return(
       <>
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
            Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
            Overview.
        </h2>

       </motion.div>

       <motion.p 
       variants={fadeIn("","",0.1,1)}
       className='mt-4 text-[#aaa6c3] text-[17px] max-w-5xl leading-[30px] flex  '>

        I am a passionate MERN Stack Developer with strong expertise in building dynamic, scalable, and user-friendly web applications using MongoDB, Express.js, React.js, and Node.js. I enjoy turning complex problems into simple, efficient solutions and have hands-on experience developing full-stack projects with modern technologies.<br></br>

          I am proficient in JavaScript, RESTful APIs, and responsive design, and I continuously strive to learn new tools and best practices to improve performance and user experience. I am a quick learner, collaborative team player, and committed to writing clean, maintainable code that solves real-world problems.<br></br>

         I am actively seeking opportunities to contribute my skills, grow as a developer, and build impactful applications.



       </motion.p>

       <div className='mt-20 flex justify-center flex-wrap gap-10'>
        {services.map((service , index)=>(
            <ServiceCard key={service.title} 
            index={index} {...service}/>
        ))}

       </div>
       </>
    )
}

export default SectionWrapper(About,"about");
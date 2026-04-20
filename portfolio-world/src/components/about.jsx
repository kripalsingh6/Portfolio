import React from 'react';
// import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import styles from '../style.js';
import {services} from '../constants';
import {fadeIn , textVariant} from '../utils/motion';

export default function About(){
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
       className='mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]'>
    Hi, I’m a software developer skilled in JavaScript, 
    React, Node.js, and Express. 
    I build scalable, user-friendly applications and enjoy turning ideas into real-world solutions.
     Let’s bring your ideas to life.


       </motion.p>

       <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service , index)=>(
            <serviceCard key={service.title} 
            index={index} {...service}/>
        ))}

       </div>
       </>
    )
}
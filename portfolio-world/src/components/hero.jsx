import {motion} from 'framer-motion';
import styles from "../style.js";
 import {ComputersCanvas} from './canvas/computers.jsx';

export default function Hero(){
    return(
      <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute 
        inset-0 top-[120px] max-w-7xl mx-auto flex 
        flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center
           items-center mt-5'>

            <div className='w-5 h-5 rounded-full 
            bg-[#915eff]'/>
            <div className='w-1 sm:h-80 h-40
            violet-gradient'/>

          </div>

          <div>
            <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white'>Hi, I'm 
              <span className='text-[#915eff]'>Kripal
              </span></h1>
              <p className='sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider 
              mt-2 text-white-100'>
                I Develop 3D visuals, user <br
                className='sm:block hidden'></br>
                interfaces and web applications

              </p>
          </div>
          
        </div>
          <ComputersCanvas/>
      </section>
    )
}
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import styles from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#1d1836',
      color: '#fff',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
    }}
    contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[18px] sm:text-[22px] font-bold leading-snug'>
        {experience.title}
      </h3>
      <p className='text-[#915eff] text-[14px] sm:text-[15px] font-semibold mt-1' style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    <ul className='mt-4 list-disc ml-4 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-[#aaa6c3] text-[13px] sm:text-[14px] pl-1 tracking-normal sm:tracking-wide leading-[20px] sm:leading-[24px]'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-start">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            MY JOURNEY & ACCOMPLISHMENTS
          </p>
          <h2 className={styles.sectionHeadText}>
            Experience & Education.
          </h2>
        </motion.div>

        <div className='mt-10 sm:mt-16 flex flex-col w-full'>
          <VerticalTimeline animate={false}>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
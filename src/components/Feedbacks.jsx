import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { highlights } from "../constants";

const FeedbackCard = ({
  index,
  title,
  detail,
  focus,
  tools,
  icon,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <h3 className='text-white text-[20px] font-bold'>{title}</h3>
      <p className='mt-3 text-secondary text-[16px] leading-[26px]'>
        {detail}
      </p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[14px]'>{focus}</p>
          <p className='mt-1 text-secondary text-[12px]'>
            {tools}
          </p>
        </div>

        <img
          src={icon}
          alt={`${title}-icon`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I focus on</p>
          <h2 className={styles.sectionHeadText}>Highlights.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {highlights.map((highlight, index) => (
          <FeedbackCard key={highlight.title} index={index} {...highlight} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

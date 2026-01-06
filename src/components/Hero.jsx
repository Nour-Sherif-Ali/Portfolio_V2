import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "MEAN Stack Developer",
  "Node.js Developer",
  "Express.js Developer",
  "Database Developer",
  "Front End Developer",
  "React Developer",
  "Angular Developer",
  "Back End Developer",
  "Asp.Net Core",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentRole) {
      delay = 1200;
    }

    if (isDeleting && displayText === "") {
      delay = 300;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.slice(0, displayText.length + 1);
        setDisplayText(nextText);
        if (nextText === currentRole) {
          setIsDeleting(true);
        }
      } else {
        const nextText = currentRole.slice(0, displayText.length - 1);
        setDisplayText(nextText);
        if (nextText === "") {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % ROLES.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Nour</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a
            <br className='sm:block hidden' />
            <span className='text-[#915EFF]'>
              {displayText}
              <span className='border-r-2 border-white ml-1' />
            </span>
          </p>
        </div>
      </div>

      <div className='absolute inset-0'>
        <ComputersCanvas />
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

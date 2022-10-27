import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutVariant, ImgVariant } from "../utils/variants";
import cover from "../assets/cover.png";
const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div className="h-full py-4 lg:h-screen xl:h-screen xxl:h-screen gap-4 sm:gap:36 md:gap:36 lg:gap-40 xl:gap-40 xxl:gap-40 flex flex-col md:flex-col lg:flex-row xl:flex-row xxl:flex-row justify-center items-center bg-gray-50">
      <motion.img
        ref={ref}
        id="about"
        animate={control}
        initial="hidden"
        variants={ImgVariant}
        src={cover}
        alt="cover-coffee"
        className=" h-36 w-36 sm:h-72 sm:w-72 lg:h-72 lg:w-72 xl:h-72 xl:w-72 xxl:h-72 xxl:w-72"
      />
      <div className="flex justify-center items-center flex-col h-72 w-72 sm:w-small md:w-medium lg:w-medium xl:w-medium xxl:w-medium gap-6">
        <motion.h1
          className="text-3xl font-semibold"
          ref={ref}
          id="about"
          animate={control}
          initial="hidden"
          variants={aboutVariant}>
          About <span className="text-primary-0">Us</span>
        </motion.h1>
        <motion.p
          className="md:text-lg lg:text-lg xl:text-lg xxl:text-lg leading-7"
          ref={ref}
          id="about"
          animate={control}
          initial="hidden"
          variants={aboutVariant}>
          For over 10 years in business we serve delicious coffee to more than
          10000 customers everyday. Our main goal is not just to served coffee
          but to make the customer feel that the coffee they are drinking give
          them extra boost to make the day great.
        </motion.p>
      </div>
    </div>
  );
};

export default About;

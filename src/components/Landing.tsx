import { motion } from "framer-motion";
import { backgoundVariant, landingVariant } from "../utils/variants";

const Landing = () => {
  return (
    <motion.div
      animate="visible"
      variants={backgoundVariant}
      initial="hidden"
      className="flex items-center flex-col bg-landing bg-cover bg-fixed bg-center h-screen opacity-95 text-white gap-2"
      id="home"
      transition={{ duration: 2 }}>
      <motion.h1
        className="mt-10 text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl xxl:text-5xl"
        animate="visible"
        variants={landingVariant}
        initial="hidden"
        transition={{ duration: 2, delay: 1 }}>
        Welcome to Kapiko
      </motion.h1>
      <motion.p
        className="text-md md:text-md lg:text-xl xl:text-xl xxl:text-xl"
        animate="visible"
        variants={landingVariant}
        initial="hidden"
        transition={{ duration: 3, delay: 2 }}>
        Where coffee helps you solve your problems.
      </motion.p>
    </motion.div>
  );
};

export default Landing;

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { productVariant } from "../utils/variants";

type ServiceProps = {
  name: String;
  icon: React.ReactNode;
};

const Service = ({ name, icon }: ServiceProps) => {
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
    <motion.div
      className="w-64 h-72 shadow-md rounded-sm text-dark-0 flex flex-col justify-center items-center gap-8"
      ref={ref}
      animate={control}
      initial="hidden"
      variants={productVariant}>
      <i className="text-primary-0 text-5xl">{icon}</i>
      <h1 className="text-xl font-semibold">{name}</h1>
    </motion.div>
  );
};

export default Service;

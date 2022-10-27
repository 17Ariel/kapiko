import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { productVariant } from "../utils/variants";

type CoffeeProps = {
  name: String;
  price: String;
  bg: string;
};

const Coffe = ({ name, price, bg }: CoffeeProps) => {
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
      className="w-64 h-72 shadow-md rounded-sm text-dark-0 flex flex-col gap-8"
      ref={ref}
      animate={control}
      initial="hidden"
      variants={productVariant}>
      <img src={bg} alt="coffee-img" className="flex-1" />
      <div className="flex justify-center items-center flex-col flex-1">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-lg">{price}</p>
      </div>
    </motion.div>
  );
};

export default Coffe;

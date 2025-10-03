import { motion } from "motion/react";
import Icon from "./Icon.tsx";

function Slot() {
  return (
    <>
      <div className="leading-0 inset-shadow-[0_0px_10px_rgba(0,0,0,0.4)] relative z-10 w-20 h-40 bg-yellow-50 rounded-xl overflow-hidden">
        <motion.div
          className="rounded-sm text-6xl h-100 text-center flex flex-col mt-[-130px] justify-center items-center select-none"
          initial={{ transform: 0 }}
          animate={{ transform: "translateY(100px)" }}
          transition={{ duration: 1 }}
        >
          <Icon />
          <Icon />
          <Icon />
          <Icon />
          <Icon />
          <Icon />
          <Icon />
          <Icon />
          <Icon />
        </motion.div>
      </div>
    </>
  );
}

export default Slot;

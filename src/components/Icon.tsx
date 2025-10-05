import "../css/App.css";
import React from "react";
import { motion } from "motion/react";

type IconProps = {
  icon: string;
};

const Icon = React.forwardRef<HTMLParagraphElement, IconProps>(
  ({ icon }, ref) => {
    if (icon === "7") {
      return (
        <>
          <motion.p
            ref={ref}
            className="mt-2.5 mb-2.5 bg-linear-to-r from-red-500 to-red-800 text-transparent bg-clip-text font-black "
          >
            7
          </motion.p>
        </>
      );
    }
    return (
      <>
        <motion.p ref={ref} className="mt-2.5 mb-2.5">
          {icon}
        </motion.p>
      </>
    );
  }
);

export default Icon;

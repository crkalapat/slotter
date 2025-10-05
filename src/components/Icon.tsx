import "../css/App.css";
import React from "react";
import { motion } from "motion/react";

type IconProps = {
  icon: string;
};

const Icon = React.forwardRef<HTMLParagraphElement, IconProps>(
  ({ icon }, ref) => {
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

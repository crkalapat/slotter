import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.tsx";
import { getRandomIcon } from "../gameLogic.tsx";

type IconData = {
  id: number;
  icon: string;
};

function Slot() {
  const maxIconLength = 9;
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [icons, setIcons] = useState<IconData[]>(
    Array.from({ length: maxIconLength }, (_, i) => {
      return {
        id: i,
        icon: getRandomIcon(),
      };
    })
  );

  let iconRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  if (iconRefs.current.length !== maxIconLength) {
    iconRefs.current = Array(maxIconLength).fill(null);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIcons((prevIcons) => {
          const updated = [...prevIcons];
          const updatedRefs = [...iconRefs.current];

          entries.forEach((entry) => {
            const index = iconRefs.current.findIndex(
              (el) => el === entry.target
            );
            if (index !== -1 && !entry.isIntersecting) {
              updated.splice(index, 1);
              updatedRefs.splice(index, 1);
            }
          });

          iconRefs.current = updatedRefs;
          return updated;
        });
      },
      {
        root: containerRef.current,
        threshold: 0.0,
      }
    );

    iconRefs.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      iconRefs.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="leading-0 inset-shadow-[0_0px_10px_rgba(0,0,0,0.4)] relative z-10 w-20 h-40 bg-yellow-50 rounded-xl overflow-hidden"
      >
        <motion.div
          className="rounded-sm text-6xl h-100 text-center flex flex-col mt-[-130px] justify-center items-center select-none"
          initial={{ transform: 0 }}
          animate={{ transform: "translateY(100px)" }}
          transition={{ duration: 20 }}
        >
          {icons.map((iconEl, i) => (
            <Icon
              ref={(el: any) => (iconRefs.current[i] = el)}
              key={iconEl.id}
              icon={iconEl.icon}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Slot;

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.tsx";
import { getRandomIcon } from "../gameLogic.tsx";

type IconData = {
  id: number;
  icon: string;
};

function Slot() {
  const maxIconLength = 4;
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
    const checkVisibility = () => {
      if (Array.isArray(iconRefs.current)) {
        iconRefs.current.forEach((iconRef, i) => {
          const containerBottom =
            containerRef.current?.getBoundingClientRect().bottom;
          const iconTop = iconRef?.getBoundingClientRect().top;

          if (iconTop && containerBottom) {
            if (iconTop > containerBottom && i == maxIconLength - 1) {
              setIcons((prevIcons) => {
                let updatedIcons = [...prevIcons];
                for (let i = 0; i < maxIconLength; i++) {
                  console.log(updatedIcons[i].icon + " ");
                }
                updatedIcons[0] = prevIcons[maxIconLength - 1];
                for (let i = 0; i < maxIconLength - 1; i++) {
                  updatedIcons[i + 1] = prevIcons[i];
                }
                console.log(
                  "Move " +
                    prevIcons[maxIconLength - 1].icon +
                    " ID: " +
                    prevIcons[maxIconLength - 1].id
                );
                for (let i = 0; i < maxIconLength; i++) {
                  console.log(updatedIcons[i].icon + " ");
                }
                console.log("-------------------");
                return updatedIcons;
              });
            }
          } else {
            if (!iconTop) {
              console.log("iconTop couldn't be used");
            } else {
              console.log("containerBottom couldn't be used");
            }
          }
        });
      } else {
        console.log("IconRefs is not an array, cannot do ForEach loop on it!");
      }
    };

    const interval = setInterval(checkVisibility, 500);

    return () => {
      clearInterval(interval);
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
          animate={{ transform: "translateY(50px)" }}
          transition={{ duration: 5 }}
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

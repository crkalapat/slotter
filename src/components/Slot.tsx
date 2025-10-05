import { motion, useMotionValue, animate } from "motion/react";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Icon from "./Icon.tsx";
import { getRandomIcon, spendCoins, numCoins } from "../gameLogic.tsx";

type IconData = {
  id: number;
  icon: string;
};

export type SlotRef = {
  spin: () => void;
  getCurrentIcon: () => string;
  isSpinning: boolean;
};

const Slot = forwardRef<SlotRef>((_, ref) => {
  let currentIDIndex = 0;
  const maxIconLength = 4;
  const iconHeight = 70;

  const y = useMotionValue(0);
  const isSpinning = useRef(false);

  const [icons, setIcons] = useState<IconData[]>(
    Array.from({ length: maxIconLength }, () => ({
      id: currentIDIndex++,
      icon: getRandomIcon(),
    }))
  );

  const spin = async () => {
    if (isSpinning.current || numCoins === 0) {
      return;
    }
    isSpinning.current = true;
    spendCoins();

    for (let i = 0; i < 40; i++) {
      await animate(y, iconHeight, {
        duration: 0.08,
        ease: "linear",
      });
      y.set(0);

      setIcons((prev) => {
        const newIcon = {
          id: currentIDIndex++,
          icon: getRandomIcon(),
        };
        return [newIcon, ...prev.slice(0, prev.length - 1)];
      });
    }

    isSpinning.current = false;
  };

  useImperativeHandle(ref, () => ({
    spin,
    getCurrentIcon() {
      return icons[2].icon;
    },
    get isSpinning() {
      return isSpinning.current;
    },
  }));

  return (
    <div className="leading-0 inset-shadow-[0_0px_10px_rgba(0,0,0,0.4)] w-20 h-40 bg-yellow-50 rounded-xl overflow-hidden">
      <motion.div
        className="text-6xl flex flex-col mt-[-130px] items-center select-none translate-y-3"
        style={{ y }}
      >
        {icons.map((icon) => (
          <Icon key={icon.id} icon={icon.icon} />
        ))}
      </motion.div>
    </div>
  );
});

export default Slot;

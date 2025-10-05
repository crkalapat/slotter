/// <reference types="vite-plugin-svgr/client" />
import { motion } from "motion/react";
import { useRef } from "react";
import { numCoins, win } from "./gameLogic.tsx";
import { useState } from "react";
import "./css/App.css";
import Coin from "./assets/Coin.svg?react";
import Slot from "./components/Slot.tsx";
import type { SlotRef } from "./components/Slot.tsx";

const App = () => {
  const slotNum = 5;
  const slotRefs = Array.from({ length: slotNum }, () => useRef<SlotRef>(null));

  function checkMatches(index: any) {
    let numMatched = 1;
    if (
      index < slotNum &&
      slotRefs[index].current?.getCurrentIcon() ===
        slotRefs[index + 1].current?.getCurrentIcon()
    ) {
      numMatched = 1 + checkMatches(index + 1);
    }
    console.log(slotRefs[index].current?.getCurrentIcon());
    console.log(slotRefs[index + 1].current?.getCurrentIcon());
    return numMatched;
  }

  const spin = () => {
    slotRefs.forEach((ref) => ref.current?.spin());
    let numMatched: number;

    setTimeout(() => {
      for (let i = 0; i < slotNum - 1; i++) {
        numMatched = checkMatches(i);
        if (
          numMatched === 1 &&
          slotRefs[i + 1].current?.getCurrentIcon() !==
            slotRefs[i].current?.getCurrentIcon()
        ) {
          continue;
        } else {
          break;
        }
      }
      win(numMatched);
      setCoinCount(numCoins);
    }, 3600);
  };

  const spinButton = () => {
    if (numCoins > 0) {
      return (
        <motion.button
          className="rounded-full bg-red-800 p-3 w-20 hover:bg-red-900 mt-15 text-white"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            spin();
            setCoinCount(numCoins);
          }}
        >
          Spin
        </motion.button>
      );
    } else {
      return (
        <motion.button
          disabled
          className="rounded-full cursor-not-allowed bg-gray-300 p-3 w-35 mt-15 text-white disabled"
        >
          Out of Money
        </motion.button>
      );
    }
  };

  const [coinCount, setCoinCount] = useState(numCoins);

  return (
    <>
      <main className="p-10">
        <div className="flex justify-center">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <h1 className="text-5xl mt-10 font-bold">Slotter</h1>
            </div>
            <div className="flex justify-end">
              <div className="flex flex-row items-center mt-10 mr-2">
                <Coin className="h-5 w-5 mr-2" />
                <motion.p layout className="text-xl font-medium">
                  {coinCount}
                </motion.p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mt-10">
                <div className="z-10 w-130 h-50 bg-red-500 rounded-2xl flex flex-row items-center justify-evenly float-left">
                  {slotRefs.map((ref, index) => (
                    <Slot key={index} ref={ref} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center">{spinButton()}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;

/// <reference types="vite-plugin-svgr/client" />
import { motion } from "motion/react";
import { useRef } from "react";
import { numCoins } from "./gameLogic.tsx";
import { useState } from "react";
import "./css/App.css";
import Coin from "./assets/Coin.svg?react";
import Slot from "./components/Slot.tsx";
import type { SlotRef } from "./components/Slot.tsx";

const App = () => {
  const slotRefs = Array.from({ length: 5 }, () => useRef<SlotRef>(null));

  const spin = () => {
    slotRefs.forEach((ref) => ref.current?.spin());
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
                <p className="text-xl font-medium">{coinCount}</p>
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
            <div className="flex justify-center">
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;

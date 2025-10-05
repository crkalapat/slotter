import { motion } from "motion/react";
import { useRef } from "react";
import "./css/App.css";
import Slot from "./components/Slot.tsx";
import type { SlotRef } from "./components/Slot.tsx";

const App = () => {
  const slotRefs = Array.from({ length: 5 }, () => useRef<SlotRef>(null));

  const spin = () => {
    slotRefs.forEach((ref) => ref.current?.spin());
  };

  return (
    <>
      <main className="p-10">
        <div className="flex justify-center">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <h1 className="text-5xl mt-10 font-bold">Slotter</h1>
            </div>
            <div className="flex flex-row">
              <div className="mt-15">
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
                onClick={spin}
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

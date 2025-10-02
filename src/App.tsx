import { motion } from "motion/react";
import "./App.css";
import Slot from "./Slot.tsx";

function App() {
  return (
    <>
      <main className="p-10">
        <div className="flex justify-center">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <motion.h1
                className="text-5xl font-bold"
                animate={{
                  color: ["#FF0000", "#000000", "#440000", "#aa0000"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Slotter
              </motion.h1>
            </div>
            <div className="mt-20">
              <div className="z-0 w-80 h-50 bg-red-500 rounded-lg flex flex-row items-center justify-evenly">
                <Slot />
                <Slot />
                <Slot />
              </div>
            </div>
            <div className="flex justify-center">
              <motion.button
                className="rounded-3xl bg-sky-700 p-3 w-20 hover:bg-sky-800 mt-10 text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Spin
              </motion.button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

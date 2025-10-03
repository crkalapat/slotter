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
              <h1 className="text-5xl mt-10 font-bold">Slotter</h1>
            </div>
            <div className="flex flex-row">
              <div className="mt-20">
                <div className="z-10 w-130 h-50 bg-red-500 rounded-2xl flex flex-row items-center justify-evenly float-left">
                  <Slot />
                  <Slot />
                  <Slot />
                  <Slot />
                  <Slot />
                </div>
                {/* <div className="">
                  <div
                    dir="rtl"
                    className="translate-x-130 translate-y-20 w-30 h-10 rounded-s-2xl bg-gray-200"
                  ></div>
                  <div className="translate-x-150 -translate-y-15 w-10 h-30 rounded-t-2xl bg-gray-200"></div>
                  <div className="translate-x-150 -translate-y-50 w-10 h-10 rounded-t-2xl bg-red-500"></div>
                </div> */}
              </div>
            </div>

            <div className="flex justify-center">
              <motion.button
                className="rounded-full bg-red-800 p-3 w-20 hover:bg-red-900 mt-15 text-white"
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

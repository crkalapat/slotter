import { motion } from "motion/react"
import './App.css'

function App() {

  return (
    <>
      <main className="p-10">
        <div className="flex justify-center">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">
              Slotter
            </h1>
            <div className="flex justify-center">
              <motion.button className="rounded-3xl bg-sky-700 p-3 w-20 hover:bg-sky-800 mt-10">
                Spin
              </motion.button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App

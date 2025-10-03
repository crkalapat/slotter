import "./App.css";

function Slot() {
  return (
    <>
      <div className="vignette relative z-10 w-20 h-40 bg-yellow-50 rounded-xl overflow-hidden">
        <div className="rounded-sm text-6xl h-100 text-center flex flex-col mt-[-130px] justify-center items-center select-none">
          <p className="mt-5">⚜️</p>
          <p className="mt-5">🎁</p>
          <p className="mt-5">🔔</p>
          <p className="mt-5">❤️</p>
          <p className="mt-5">♠️</p>
        </div>
      </div>
    </>
  );
}

export default Slot;

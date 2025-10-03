import "../css/App.css";
import { getRandomIcon } from "../gameLogic.tsx";

function Icon({ id }: any) {
  return (
    <>
      <p key={id} className="mt-2.5 mb-2.5">
        {getRandomIcon()}
      </p>
    </>
  );
}

export default Icon;

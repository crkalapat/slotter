import "../css/App.css";
import React from "react";

// function Icon({ id, ref, icon }: any) {
//   return (
//     <>
//       <p ref={ref} key={id} className="mt-2.5 mb-2.5">
//         {icon}
//       </p>
//     </>
//   );
// }
type IconProps = {
  icon: string;
};

const Icon = React.forwardRef<HTMLParagraphElement, IconProps>(
  ({ icon }, ref) => {
    return (
      <>
        <p ref={ref} className="mt-2.5 mb-2.5">
          {icon}
        </p>
      </>
    );
  }
);

export default Icon;

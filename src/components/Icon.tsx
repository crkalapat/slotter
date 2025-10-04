import "../css/App.css";

function Icon({ id, ref, icon }: any) {
  return (
    <>
      <p ref={ref} key={id} className="mt-2.5 mb-2.5">
        {icon}
      </p>
    </>
  );
}

export default Icon;

import spin from "./assets/spin.svg";
const Loader = () => {
  return (
    <div className="bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50">
      <div>
        <img src={spin} alt="Loading..." className="h-24" />
      </div>
    </div>
  );
};

export default Loader;

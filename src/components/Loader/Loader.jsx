import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={90}
        width={90}
        timeout={2500}
      />
    </>
  );
};
export default Spinner;

const Loader = (props) => {
  return (
    <>
      <div className="flex justify-center">
        <img className="h-12 mt-60" src="loader.gif" />
      </div>
      <div className="title text-primary justify-center flex mt-20 text-3xl">
        {props.value}
      </div>
    </>
  );
};

export default Loader;

const Loader = (props) => {
    console.log(props.value)
  return (
    <>
      <div className="flex justify-center">
        <img className="h-12 mt-60" src="loader.gif" />
      </div>
      <div className="title text-primary justify-center flex mt-10 text-3xl">
        {props.value ?? 'Verifying....'}
      </div>
    </>
  );
};

export default Loader;

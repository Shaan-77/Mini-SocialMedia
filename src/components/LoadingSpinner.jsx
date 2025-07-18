const LoadingSpinner = () => {
  return (
    <center className="d-flex   justify-content-center  center-spinner">
      <div
        className="spinner-border spinner-container"
        role="status"
        style={{
          height: "10rem",
          width: "10rem",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
};

export default LoadingSpinner;

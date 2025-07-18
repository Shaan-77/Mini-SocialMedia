const Welcome = ({ setSelectedTab }) => {
  return (
    <center className="WelcomeMsg">
      <p>NO POST'S HAVE BEEN POSTED </p> <br />
      <p>
        Wanna
        <button
          type="button"
          className="btn btn-info"
          onClick={() => setSelectedTab("Create Posts")}
        >
          <a href="#" className={`nav-link  active`}>
            Create Posts
          </a>
        </button>
        ?
      </p>
    </center>
  );
};

export default Welcome;

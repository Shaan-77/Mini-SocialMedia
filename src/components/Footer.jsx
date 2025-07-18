const Footer = ({ setSelectedTab }) => {
  return (
    <>
      <div className="container footer">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item" onClick={() => setSelectedTab("home")}>
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => setSelectedTab("Create Posts")}
            >
              <a href="#" className="nav-link px-2 text-body-secondary">
                Create Posts
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
        </footer>
      </div>
    </>
  );
};
export default Footer;

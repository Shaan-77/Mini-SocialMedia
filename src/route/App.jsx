import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Createpost from "../components/Createpost";
import PostListProvider from "../data store/Post-list-store";
import Postlist from "../components/Postlist";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [SelectedTab, setSelectedTab] = useState("home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          SelectedTab={SelectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="Content">
          <Header
            SelectedTab={SelectedTab}
            setSelectedTab={setSelectedTab}
          ></Header>
          {/* 
          {SelectedTab === "home" ? (
            <div className="content-body">
              <Postlist setSelectedTab={setSelectedTab}></Postlist>
            </div>
          ) : (
            <Createpost></Createpost>
          )} */}
          <div className="content-body">
            <Outlet></Outlet>
          </div>

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

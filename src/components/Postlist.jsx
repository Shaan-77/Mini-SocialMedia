import Posts from "./Posts";
import { Postliststore } from "../data store/Post-list-store";
import { useContext, useEffect, useState } from "react";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";

const Postlist = ({ setSelectedTab }) => {
  const { postlist, Fetching } = useContext(Postliststore);

  return (
    <>
      {Fetching && <LoadingSpinner />}
      {!Fetching && postlist.length === 0 && (
        <Welcome setSelectedTab={setSelectedTab}></Welcome>
      )}
      {!Fetching &&
        postlist.map((post) => <Posts key={post.id} post={post}></Posts>)}
    </>
  );
};
export default Postlist;

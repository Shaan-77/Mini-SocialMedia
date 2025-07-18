import { BiLike } from "react-icons/bi";
import "../App.css";

import { AiOutlineDelete } from "react-icons/ai";
import { Postliststore } from "../data store/Post-list-store";
import { useContext } from "react";

const Posts = ({ post }) => {
  const { DeletePost } = useContext(Postliststore);
  const tags = post?.tags || [];

  return (
    <>
      <div
        className="card postlists"
        style={{ width: "18rem", height: "fit-content", margin: "15px" }}
      >
        <img
          src={post.imageDataUrl || "./default.png"}
          className="card-img-top image"
          alt="Post"
        />

        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>

          <a href="#" className="btn btn-primary">
            Like <BiLike />
          </a>
          <br />
          {tags?.map((tags) => (
            <span key={tags} className="badge text-bg-info tags">
              #{tags}
            </span>
          ))}
          <AiOutlineDelete
            className="deltag"
            onClick={() => DeletePost(post.id)}
          />
        </div>
        <div className="alert alert-info reactions" role="alert">
          This post has been reacted by {post.reactions} people
        </div>
      </div>
    </>
  );
};

export default Posts;

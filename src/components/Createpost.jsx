import { useContext, useRef, useState } from "react";
import { BiLike } from "react-icons/bi";
import { Postliststore } from "../data store/Post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

const Createpost = () => {
  const inputimgfile = useRef(null);
  const [image, setimage] = useState("");
  const [changedtitilevalue, setchangedtitlevalue] = useState("");
  const [changedcontentevalue, setchangedcontentvalue] = useState("");
  const userIDElement = useRef();
  const PostTitleElement = useRef();
  const PostContentElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const [changedTags, setChangedTags] = useState([]);
  const [samplereactinons, setsamplereactinons] = useState("");
  const navigate = useNavigate();
  const { addPost } = useContext(Postliststore);
  const handleontagschange = (event) => {
    const tagsValue = event.target.value
      .split(" ")
      .filter((tag) => tag.trim() !== "");

    setChangedTags(tagsValue);
  };

  const Handleimgchange = (event) => {
    event.preventDefault();
    try {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];

        if (!file.type.match("image.*")) {
          alert("Please select an image file");
          return;
        }

        setimage(file);
      }
    } catch (error) {
      alert("Error uploading image");
    }
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    inputimgfile.current.click();
  };

  const handlereactionchange = (event) => {
    setsamplereactinons(event.target.value);
  };

  const handleontitlechange = (event) => {
    const changedvalue = event.target.value;
    setchangedtitlevalue(changedvalue);
  };
  const handleoncontentchange = (event) => {
    const changedvalue = event.target.value;
    setchangedcontentvalue(changedvalue);
  };

  const HandleSubmitBtn = (event) => {
    event.preventDefault();

    const UserId = userIDElement.current.value;
    const PostTitle = PostTitleElement.current.value;
    const PostContent = PostContentElement.current.value;
    const PostReaction = reactionsElement.current.value;
    const PostTags = tagsElement.current.value
      .split(" ")
      .filter((tag) => tag.trim() !== "");

    addPost(UserId, PostTitle, PostContent, PostReaction, PostTags, image);
    userIDElement.current.value = " ";
    PostTitleElement.current.value = "";
    PostContentElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    setimage(null);
    setchangedtitlevalue("");
    setchangedcontentvalue("");
    setChangedTags([""]);
    setsamplereactinons("");
    navigate("/");
  };

  return (
    <>
      <div className="Createpostsection">
        <Form method="POST" className="create-post" onSubmit={HandleSubmitBtn}>
          <div className="img-selector">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="img-selected"
                title="Upload image for post"
              />
            ) : (
              <img
                src="./default.png"
                alt=""
                className="Select-img"
                title="Upload image for post"
              />
            )}

            <input
              type="file"
              onChange={Handleimgchange}
              ref={inputimgfile}
              name="image"
              accept="image/*"
              title="Upload image for post"
              style={{ display: "none" }}
              hidden
            />
          </div>
          <button className="btn btn-dark" onClick={handleButtonClick}>
            Upload Image
          </button>
          <br /> <br />
          <div className="mb-3">
            <label htmlFor="UserId" className="form-label">
              Post UserId :
            </label>
            <input
              type="text"
              ref={userIDElement}
              className="form-control"
              id="UserId"
              placeholder="post's UserId"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="postTitle" className="form-label">
              Post Title :
            </label>
            <input
              type="text"
              ref={PostTitleElement}
              className="form-control"
              id="postTitle"
              placeholder="post's Title"
              onChange={handleontitlechange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="UserId" className="form-label">
              Post Content :
            </label>
            <textarea
              rows={"5"}
              type="text"
              ref={PostContentElement}
              className="form-control"
              id="PostContent"
              placeholder="post's Content...."
              onChange={handleoncontentchange}
              style={{ resize: "none" }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="postTitle" className="form-label">
              Post Reactions :
            </label>
            <input
              type="number"
              ref={reactionsElement}
              onChange={handlereactionchange}
              className="form-control"
              id="postReactions"
              placeholder="post's Reactions"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="UserId" className="form-label">
              Post Hashtags :
            </label>
            <input
              type="text"
              ref={tagsElement}
              className="form-control"
              id="PostHashtags"
              placeholder="post's Hashtags"
              onChange={handleontagschange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-info"
            style={{ width: "120px", marginTop: "10px" }}
          >
            Post
          </button>
        </Form>

        <div>
          <center
            style={{
              marginTop: "10px",
              fontSize: "30px",
              fontFamily: "times new roman",
            }}
          >
            Sample Post
          </center>
          <div
            className="card postlists"
            style={{ width: "18rem", height: "fit-content" }}
          >
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="img-selected"
                title="Upload image for post"
              />
            ) : (
              <img
                src="../src/img/default.png"
                alt=""
                className="Select-img"
                title="Upload image for post"
              />
            )}

            <div className="card-body">
              <h5 className="card-title">{changedtitilevalue}</h5>
              <p className="card-text">{changedcontentevalue}</p>
              <a href="#" className="btn btn-primary">
                Like <BiLike />
              </a>
              <br />

              {changedTags.map((tag, index) => (
                <span key={index} className="badge text-bg-info tags">
                  #{tag}
                </span>
              ))}
              <div
                className="alert alert-info reactions"
                role="alert"
                style={{ width: "100%", margin: "10px 15px 10px 0" }}
              >
                This post has been reacted by {samplereactinons} people
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createpost;

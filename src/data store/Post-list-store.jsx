import { createContext, useReducer, useEffect, useState } from "react";

export const Postliststore = createContext({
  postlist: [],
  addPost: () => {},
  Fetching: false,
  DeletePost: () => {},
});

const postlistprovider = (currPostList, action) => {
  let NewPostList = [...currPostList];
  if (action.type === "DELETE_POST") {
    NewPostList = currPostList.filter(
      (post) => post.id !== action.payload.postid
    );
  } else if (action.type === "ADD_POST") {
    NewPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INIT_POST") {
    NewPostList = action.payload.posts;
  }
  if (NewPostList.length > 50) {
    NewPostList = NewPostList.slice(0, 50);
  }

  // Store the new post list in local storage
  localStorage.setItem("postlist", JSON.stringify(NewPostList));

  return NewPostList;
};

function PostListProvider({ children }) {
  const [postlist, postlistdispatcher] = useReducer(postlistprovider, []);

  // // Load posts from local storage when the component mounts
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("postlist")) || [];
    postlistdispatcher({
      type: "ADD_INIT_POST",
      payload: { posts: savedPosts },
    });
  }, []);

  //
  const addPost = async (
    UserId,
    PostTitle,
    PostContent,
    PostReaction,
    PostTags,
    image
  ) => {
    let imageDataUrl = null;
    if (image) {
      imageDataUrl = await convertToBase64(image);
    }

    const newPost = {
      id: Date.now(),
      imageDataUrl, // Save Base64 string instead of blob URL
      title: PostTitle,
      body: PostContent,
      reactions: PostReaction,
      user_id: UserId,
      tags: PostTags,
    };

    postlistdispatcher({
      type: "ADD_POST",
      payload: newPost,
    });
  };

  // Helper function to convert image to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const AddInitposts = (posts) => {
    postlistdispatcher({
      type: "ADD_INIT_POST",
      payload: {
        posts: [...postlist, ...posts],
      },
    });
  };

  const DeletePost = (postid) => {
    postlistdispatcher({ type: "DELETE_POST", payload: { postid } });
  };
  const [Fetching, setFetching] = useState(false);

  // sample data

  useEffect(() => {
    // Fetch posts from the API only once when the component mounts
    if (postlist.length === 0) {
      setFetching(true);
      const controller = new AbortController();
      const signal = controller.signal;

      fetch("https://dummyjson.com/posts?&select=title,body,userId,tags,", {
        signal,
      })
        .then((res) => res.json())
        .then((data) => {
          // Add posts from the API only if the local storage is empty
          AddInitposts(data.posts);
          setFetching(false);
        })
        .catch((error) => {
          // console.error("Error fetching posts:", error);
          setFetching(false);
        });

      return () => {
        controller.abort();
      };
    }
  }, [postlist.length]);

  return (
    <Postliststore.Provider value={{ postlist, addPost, Fetching, DeletePost }}>
      {children}
    </Postliststore.Provider>
  );
}

export default PostListProvider;

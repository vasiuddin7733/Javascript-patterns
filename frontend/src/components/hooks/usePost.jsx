import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

const UsePost = ({ title }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${title}`)
      .then((result) => {
        console.log(result.data);
        setPosts(result.data);
      })
      .catch((error) => console.log(error));
  }, [title]);

  return posts;
};

export default UsePost;

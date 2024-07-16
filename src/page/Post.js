import React from "react";
import { Link } from "react-router-dom";

const Post = ({ posts }) => {
  return (
  
    <div className=" ">
      <ul key={posts.id} className="py-5 px-10 border">
        <Link to={`/NewPost/${posts.id}`}>
        <li className="text-xl font-semibold">
          {posts.title}
        </li>
        <li className="text-xs font-normal py-2"> {posts.datetime} </li>
          </Link>
        <li className="text-lg font-medium">
          {posts.body.length <= 25
            ? posts.body
            : `${posts.body.slice(0, 25)}...`}
        </li>
      </ul>
 
      
    </div>
  );
};

export default Post;

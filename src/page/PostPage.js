import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

const PostPage = () => {
  const { posts, handleDelete } = useContext(DataContext)
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
 

  return (
    <div className="text-center">
      {post && (
        <>
          <div className="py-3 px-10">
            <ul key={post.id} className="">
              <li className="text-xl font-semibold">{post.title}</li>
              <li className="text-xs font-normal py-2"> {post.datetime} </li>
              <li className="text-lg font-medium">
                {post.body}
              </li>
            </ul>
            <div>
              <Link to={`/EditPage/${post.id}`}>
              <button
                className="my-5 py-3 px-5 border border-gray-200 bg-green-500"  
              >
                Edit
              </button>
              </Link>
              <button
                className="my-5 py-3 px-5 border border-gray-200 bg-red-500"
                onClick={() => {
                  handleDelete(post.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
          <hr className=""></hr>
        </>
      )}
      {!post && (
        <>
          <p className="text-center py-20 text-2xl font-semibold">
            The Page is Deleted
          </p>
        </>
      )}
    </div>
  );
};

export default PostPage;

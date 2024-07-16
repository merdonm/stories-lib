import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

const EditPage = () => {
  const {
    posts,
    editTitle,
    setEditTitle,
    editContent,
    setEditContent,
    handleSave,
  } = useContext(DataContext)
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditContent(post.body);
    }
  }, [post, setEditTitle, setEditContent]);

  return (
    <div className="h-screen px-2">
      {post ? (
        <>
          <form
            className="text-center"
            onSubmit={(e) => {
              handleSave(e, id);
            }}
          >
           <group className='flex flex-col min-w-96 py-5 '>
           <label htmlFor="title" className="font-semibold text-lg py-3">
                EditTitle
              </label>
              <input
          className="bg-slate-200 min-h-10 py-4 outline-none  border border-gray-400 rounded  px-5 "
          type="text"
                value={
                  editTitle
                }
                // placeholder={}
                onChange={(e) => {
                  setEditTitle(e.target.value);
                }}
              />
            </group>
            <group className="flex flex-col ">
              <label htmlFor="Post Body" className="font-semibold text-lg py-3">
                Content
              </label>
              <textarea
                type="text"
                rows={4}
                className="bg-gray-200  px-5 pt-5 outline-none  border border-gray-400 rounded"
                required
                value={editContent}
                placeholder={post.body}
                onChange={(e) => {
                  setEditContent(e.target.value);
                }}
              ></textarea>
            </group>
            <button type="submit" className='py-5 border bg-gray-200  border-gray-400 mt-10 w-fit px-10 rounded-md hover:bg-gray-200 hover:text-blue-600 hover:border-blue-600'>Save</button>
          </form>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default EditPage;

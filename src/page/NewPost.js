import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const NewPost = () => {
  const { title, setTitle, content, setContent, handleSubmit } = useContext(DataContext)
  return (
    <form className="  flex flex-col h-screen  px-10" onSubmit={handleSubmit}>
      <group className='flex flex-col min-w-96 py-5 '>
        <label htmlFor="title" className="font-semibold text-lg py-3">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
          className="bg-slate-200 min-h-10 py-4 outline-none  border border-gray-400 rounded  px-5 "
          required
        />
      </group>
      <group className='flex flex-col '>
        <label htmlFor="Post Body" className="py-3">
          Content
        </label>
        <textarea type="text" rows={4} placeholder="Content Here" className="bg-gray-200  px-5 pt-5 outline-none  border border-gray-400 rounded"
        required
        value={content}
        onChange={(e)=>{setContent(e.target.value)}}></textarea>
      </group>
      <button className='py-5 border bg-slate-100 border-gray-100 mt-10 w-fit px-10 rounded-md hover:bg-gray-200 hover:text-blue-600 hover:border-blue-600' type="submit">Submit</button>
    </form>
  );
};

export default NewPost;
                  
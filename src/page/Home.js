import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "../context/DataContext";

const Home = () => {
  const {isLoading,fetchError,searchResults,errorMessage} = useContext(DataContext)
  return (
    <>
    <div className="flex  py-5">
      {!isLoading && !fetchError ? ((searchResults.length) ?( <Feed key={searchResults.id} post={searchResults} />) : (<p>No Post available at right now</p>)) : isLoading ?  (<p className="text-center py-14 text-xl font-bold">Loading...</p>) : fetchError ? (errorMessage) : ""}
      
    </div>
    </>
  );
};

export default Home;

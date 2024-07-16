import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./page/Header";
import Nav from "./page/Nav";
// import Home from "./page/Home";
import About from "./page/About";
import Footer from "./page/Footer";
import Missing from "./page/Missing";
import NewPost from "./page/NewPost";
import EditPage from "./page/EditPage";
import PostPage from "./page/PostPage";
import { DataProvider } from "./context/DataContext";
import Welcome from "./page/WelcomePage";
import Login from "./page/Login";
import Register from "./page/Register";
const LazyHome = React.lazy(()=>import("./page/Home"))

const App = () => {
  const location = useLocation()
  const hideNavAndFooter = ["/","/login","/register"].includes(location.pathname.toString())
  return (
    <>
      <DataProvider>
        {!hideNavAndFooter  && <Header title={"React Social App"}/> }
        {!hideNavAndFooter  && <Nav/> }
       
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<React.Suspense fallback="Loading..."><LazyHome /></React.Suspense>} />
          <Route path="/NewPost">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />}></Route>
          </Route>
          <Route path="/EditPage/:id" element={<EditPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/*" element={<Missing />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
        </Routes>

{!hideNavAndFooter && <Footer />}
      </DataProvider>
    </>
  );
};

export default App;

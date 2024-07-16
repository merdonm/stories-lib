import { createContext, useState, useEffect } from "react";
import { format } from "date-fns";
import api from "../api/posts";
import { useNavigate } from "react-router-dom";


const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const [editTitle, setEditTitle] = useState(posts.title);
  const [editContent, setEditContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({})
  const [registerFormData, setRegisterFormData] = useState({})
  const [registerError, setRegisterError ] = useState('')
  const [loginErr, setLoginErr] = useState("")
  const [registerFieldErr, setRegisterFieldErr] = useState("")

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
        setIsLoading(false);
      } catch (error) {
        setFetchError(true);
        setIsLoading(false);
        if (error.response) {
          setErrorMessage(`ErrorData:${error.response.data}`);
          setErrorMessage(`ErrorStatus:${error.response.status}`);
          setErrorMessage(`ErrorMessage:${error.response.message}`);

          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.message);
        } else {
          setErrorMessage(`Error:${error.message}`);
          console.log(`Error:${error.message}`);
        }
      }
    };
    const fetchWithDelay = () => {
      setTimeout(() => {
        fetchPost();
      });
    };
    fetchWithDelay();
  }, [setPosts, setIsLoading, setFetchError, setErrorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? parseInt(posts[posts.length - 1].id) + 1 : 1;
    const dateTime = format(new Date(), "MMMM ,dd,yyyy,pp");
    const newPost = {
      id: id.toString(),
      title: title,
      datetime: dateTime,
      body: content,
    };
    try {
      const response = await api.post("/posts", newPost);
      const allPost = [...posts, response.data];
      setPosts(allPost);
      setTitle("");
      setContent("");
      navigate("/home");
    } catch (error) {
      if (error.response) {
        console.log(`Error:${error.message}`);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const filteredPost = posts.filter((post) => post.id !== id);
      setPosts(filteredPost);
      navigate("/home");
    } catch (error) {
      console.log("msg", error);
    }
  };
  useEffect(() => {
    const fetchedResult = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(fetchedResult.reverse());
  }, [search, posts]);

  const handleSave = async (e, id) => {
    e.preventDefault();
    console.log("here");
    console.log("id", id);
    const dateTime = format(new Date(), "MMMM ,dd,yyyy,pp");

    const updatedPost = {
      id: id.toString(),
      title: editTitle,
      datetime: dateTime,
      body: editContent,
    };
    // console.log(updatedPost);
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);

      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditContent("");
      navigate("/home");
    } catch (error) {
      if (error.response) {
        console.log("msg", error);
      }
    }
  }

  const handleChange = (e)=>{
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
    setRegisterFieldErr("")
  };
  
  let data;
  console.log(data);

  const handleLoginSubmit =(e) =>{
    e.preventDefault()
    if(!formData.email || !formData.password){
      setRegisterFieldErr("Please Enter all Fields")
      return
    }
    const registeredUser = JSON.parse(localStorage.getItem("registeredUserData"))
    if(registeredUser && registeredUser.email === formData.email && registeredUser.password === formData.password)
    {
      setLoginErr("")
      navigate("/home")
    }
    else{
      setLoginErr("Invalid Email or Password")
    }
    }

  const handleRegister = (e)=>{
    const {name,value} = e.target
    setRegisterFormData({...registerFormData, [name] : value})
    setRegisterFieldErr("")
  }
  
  const handleRegisterSubmit = (e) =>{
    e.preventDefault()
    if(!registerFormData.fullName || !registerFormData.email || !registerFormData.password || !registerFormData.confirmPassword)
    {setRegisterFieldErr("Please Enter all Fields")
      return
    }
    if (registerFormData.password !== registerFormData.confirmPassword)
    {
    setRegisterError("Miss matched password and confirm password")
    }
    else{
   
    setRegisterError("")
    localStorage.setItem("registeredUserData",JSON.stringify(registerFormData))
    setRegisterFormData({fullName:"", email:"", password:"", confirmPassword:""}) 
    navigate("/login")
    }
  }
  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        isLoading,
        fetchError,
        errorMessage,
        title,
        setTitle,
        content,
        setContent,
        handleSubmit,
        posts,
        handleDelete,
        editTitle,
        setEditTitle,
        editContent,
        setEditContent,
        handleSave,
        formData,
        setFormData,
        handleChange,
        handleLoginSubmit,
        registerFormData,
        setRegisterFormData,
        handleRegister,
        handleRegisterSubmit,
        registerError,
        loginErr,
        registerFieldErr
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

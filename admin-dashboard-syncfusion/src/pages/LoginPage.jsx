import { useState, useEffect } from "react";
import axios from "axios";
import { HiOutlineUserCircle, HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../components/Spinner";
import Dropzone from "react-dropzone";
import {useDropzone} from "react-dropzone";

const LoginPage = () => {
    const [pageType, setPageType] = useState("login");
    const navigate = useNavigate();
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";
    const [file, setFile] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);

    // const [files, setFiles] = useState([]);
    // const {getRootProps, getInputProps} = useDropzone({
    //     maxFiles: 1,
    //     accept: 'image/*',
    //     onDrop: acceptedFiles => {
    //         setFiles(acceptedFiles.map(file => Object.assign(file, {
    //         preview: URL.createObjectURL(file)
    //         })));
    //     }
    // });

    // const thumbs = files.map(file => (
    //   <div key={file.name}>
    //     <div className="flex p-2 bg-white text-sm">
    //       <img src={file.preview} className="w-16 mr-4"/>
    //       {file.name}
    //     </div>
    //   </div>
    // ));
  
    // useEffect(() => {
    //   // Make sure to revoke the data uris to avoid memory leaks
    //   files.forEach(file => URL.revokeObjectURL(file.preview));
    // }, [files]);

    // useEffect(() => {
    //   if (localStorage.getItem('user')) {
    //     navigate("/dashboard");
    //   }
    // }, [])

    const register = async () => {
        setLoading(true);
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "neublock");
        
        try {
            const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dwxdztigp/image/upload",
            data
        );
            const { url } = uploadRes.data;
            console.log('Image result', url)
            const registerValues = {
                firstName,
                lastName,
                email,
                password,
                picturePath: url || 'https://res.cloudinary.com/dwxdztigp/image/upload/v1674659921/neublock/yro4ihczj4vnoxc2h4yn.jpg',
            };

            console.log('Form Data',registerValues);
            // const savedUserResponse = await fetch(
            // "http://localhost:3001/auth/register",
            // {
            //     method: "POST",
            //     body: registerValues,
            // }
            // );
            axios.post('https://neublock-backend.onrender.com/auth/register', registerValues)
                .then(response => {
                    console.log("Reg response", response);
                    const savedUser = response.data;
                    toast.success('New account successfully created')  
                    if (savedUser) {
                    setPageType("login");
                    }
                    })
                .catch(error => {
                    console.log(error);
                    toast.error('Oops! There was an error.')  
                });
        } catch (err) {
            console.log(err);
            toast.error('Oops! There was an error.')  
        } finally {
            setLoading(false);
        }
    };

    const login = async (e) => {
        e.preventDefault();
        setLoading(true);

        const loginUser = {
            email,
            password,
        };
        const loggedInResponse = await fetch("https://neublock-backend.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginUser),
        });
        const loggedIn = await loggedInResponse.json();
        // console.log('loggedIn Response', loggedIn)
        setLoading(false);
        toast.info(loggedIn.msg)         
        if (loggedIn.msg !== "Invalid credentials. ") {
            localStorage.setItem('user', JSON.stringify(loggedIn.user))
            localStorage.setItem('token', loggedIn.token)
            // console.log('loggedIn', loggedIn);
            // console.log('loggedIn user firstName', loggedIn.user.firstName);
            // console.log('user firstName', JSON.parse(localStorage.getItem('user')));

            navigate("/dashboard");
        }
    };

    const handleFormSubmit = async (e) => {
        if (isLogin) await login(e);
        if (isRegister) await register();
    };
    
    return (
        <div className="dark:bg-main-dark-bg w-full h-screen grid place-content-center">
            <ToastContainer />
            <div className="lg:w-96 w-80 -ml-14 lg:-ml-16 xl:-ml-32 bg-blue-200 h-full p-8 rounded-2xl overflow-visible">
                <p className="text-center text-xl lg:text-2xl font-medium mb-8">Welcome back!</p>
                    <form onSubmit={(e) => handleFormSubmit(e)} >
                        <div className="flex flex-col">
                            {isRegister && (
                            <div>
                                <div className="flex flex-wrap w-full relative h-10 bg-white items-center rounded mb-4 mt-2 pr-10">
                                    <div className="flex -mr-px justify-center w-15 p-2">
                                    <span
                                        className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                                    >
                                        <HiOutlineUserCircle/>
                                    </span>
                                    </div>
                                    <input
                                    type="text"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    name="firstName" 
                                    value={firstName}
                                    className="flex-shrink flex-grow leading-normal w-px flex-1 border-0 h-6 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-md outline-none"
                                    placeholder="First Name"
                                    />
                                </div>
                                <div className="flex flex-wrap w-full relative h-10 bg-white items-center rounded mb-2 mt-2 pr-10">
                                    <div className="flex -mr-px justify-center w-15 p-2">
                                    <span
                                        className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                                    >
                                        <HiOutlineUserCircle/>
                                    </span>
                                    </div>
                                    <input
                                    type="text"
                                    onChange={(e) => setLastName(e.target.value)}
                                    name="lastName" 
                                    value={lastName}
                                    className="flex-shrink flex-grow leading-normal w-px flex-1 border-0 h-6 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-md outline-none"
                                    placeholder="Last Name"
                                    />
                                </div>
                                {/* <div className="border-2 border-white p-2 border-dashed">
                                    <div {...getRootProps({className: 'dropzone'})}>
                                        <input {...getInputProps()} />
                                        <p className="text-sm">Drag 'n' drop your picture here, or click to select files</p>
                                    </div>
                                    <aside>
                                        {thumbs}
                                    </aside>
                                </div> */}
                                <input 
                                    className="login-form-upload"
                                    type="file" 
                                    onChange={(e) => setFile(e.target.files[0])} 
                                />
                                
                            </div>
                            )}
                            
                                <div className="flex flex-wrap w-full relative h-10 bg-white items-center rounded mb-4 mt-2 pr-10">
                                    <div className="flex -mr-px justify-center w-15 p-2">
                                    <span
                                        className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                                    >
                                        <HiOutlineMail/>
                                    </span>
                                    </div>
                                    <input
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email" 
                                    value={email}
                                    className="flex-shrink flex-grow leading-normal w-px flex-1 border-0 h-6 border-grey-light rounded rounded-l-none lg:px-3 xl:px-3 self-center relative  font-roboto text-md outline-none"
                                    placeholder="Email"
                                    />
                                </div>
                                <div className="flex flex-wrap w-full relative h-10 bg-white items-center rounded mb-4  mt-2 pr-10">
                                    <div className="flex -mr-px justify-center w-15 p-2">
                                    <span
                                        className="flex items-center leading-normal bg-white rounded rounded-r-none text-2xl px-3 whitespace-no-wrap text-gray-600"
                                    > 
                                        <HiOutlineLockClosed/>
                                    </span>
                                    </div>
                                    <input
                                    type="password"
                                    name="password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="flex-shrink flex-grow leading-normal w-px flex-1 border-0 h-6 px-3 relative self-center font-roboto text-md outline-none"
                                    placeholder="Password"
                                    />
                                </div>
                                
                                <button type="submit"
                                    className="bg-blue-400 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight lg:text-md xl:text-md text-base font-sans mt-6 "
                                >
                                    {loading? <Spinner/> : isLogin ? 'Login' : 'Register'}
                                </button>
                                

                                {/* <p 
                                    style={{ cursor: 'pointer'}} 
                                    className="mt-6 text-sm lg:text-md" 
                                    onClick={() => {
                                    setPageType(isLogin ? "register" : "login");
                                }}>
                                    {isLogin
                                    ? "Don't have an account? Sign Up here."
                                    : "Already have an account? Login here."}
                                </p> */}
                                
                        </div>
                    </form>
            </div>
        </div>
    );
};

export default LoginPage;
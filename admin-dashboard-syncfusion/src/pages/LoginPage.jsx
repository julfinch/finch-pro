import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { ProgressButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
enableRipple(true);
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const [notif, setNotif] = useState("");


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

            // console.log('Form Data',registerValues);
            // const savedUserResponse = await fetch(
            // "http://localhost:3001/auth/register",
            // {
            //     method: "POST",
            //     body: registerValues,
            // }
            // );
            axios.post('http://localhost:3001/auth/register', registerValues)
                .then(response => {
                    console.log("Reg response", response);
                    const savedUser = response.data;
                    // notification.success({
                    //     message: 'Success!',
                    //     description: 'New account successfully created',
                    // });
                    if (savedUser) {
                    setPageType("login");
                    }
                    })
                .catch(error => {
                    console.log(error);
                    // notification.error({
                    //     message: '',
                    //     description: 'Oops! There was an error.',
                    // });
                });
        
        } catch (err) {
            console.log(err);
            // notification.error({
            //     message: '',
            //     description: 'Oops! There was an error.',
            // });
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
        const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginUser),
        });
        const loggedIn = await loggedInResponse.json();
        console.log('loggedIn Response', loggedIn)

        setLoading(false);
        toast.info(loggedIn.msg)
        toast('🦄 loggedIn.msg', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        if (loggedIn.msg) {
            // notification.info({
            // message: loggedIn.msg,
            // description: '',
            // });
            toast.info(loggedIn.msg)
            toast('🦄 loggedIn.msg', loggedIn.msg , {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setNotif(loggedIn.msg);
        }
            
        
        if (loggedIn) {
            localStorage.setItem('user', JSON.stringify(loggedIn.user))
            localStorage.setItem('token', loggedIn.token)
            console.log('loggedIn', loggedIn);
            console.log('loggedIn user firstName', loggedIn.user.firstName);
            console.log('user firstName', JSON.parse(localStorage.getItem('user')));

            // dispatch(
            //     setLogin({
            //         user: loggedIn.user,
            //         token: loggedIn.token,
            //     })
            // );
            navigate("/dashboard");
        }

    };

    toast.promise(
        login,
        {
          pending: 'Promise is pending',
          success: 'Promise resolved 👌',
          error: 'Promise rejected 🤯'
        }
    )
    // const isAuth = Boolean(useSelector((state) => state.isLoggedIn));
    // console.log("state isAuth", isAuth)
    // const user = useSelector((state) => state.user);
    // console.log("state user", user)
    // const token = useSelector((state) => state.token);
    // console.log("state token", token)

    const handleFormSubmit = async (e) => {
        if (isLogin) await login(e);
        if (isRegister) await register();
    };
    
    useEffect(() => {
        toast.promise(login, {
        pending: "Logging In...",
        success: "Successfully Logged In!",
        error: "error"
        });
    }, []);

    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate("/dashboard")
        }
    }, [])
    
    

    return (
        <div className="dark:bg-main-dark-bg w-full h-screen grid place-content-center">
            <div className="w-96 -ml-32 h-full bg-white p-8 rounded-2xl overflow-visible">
                <p className="text-center text-2xl font-medium">Welcome back!</p>
                    <form onSubmit={(e) => handleFormSubmit(e)} >
                        <div className="flex flex-col">
                            {isRegister && (
                            <div>
                            <TextBoxComponent name="firstName" value={firstName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} floatLabelType="Auto"/>
                                <TextBoxComponent name="lastName" value={lastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} floatLabelType="Auto"/>
                            </div>
                            )}
                            <TextBoxComponent name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} floatLabelType="Auto"/>
                            <TextBoxComponent name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} floatLabelType="Auto"/>
                            <p className="mt-2">{notif} </p>
                            <div className=" flex flex-col justify-evenly mt-6">
                                <ProgressButtonComponent type="submit" content="LOGIN"/>
                            </div>
                            
                        </div>
                    </form>
            </div>
        </div>
    );
};

export default LoginPage;
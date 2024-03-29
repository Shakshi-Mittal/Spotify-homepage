//import {useState} from "react";
// import {useCookies} from "react-cookie";
import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from "../components/shared/PasswordInput";
import {Link} from 'react-router-dom';
//import {makeUnauthenticatedPOSTRequest} from "../utils/serverHelper";

const SignupComponent = () => {
    // const [email, setEmail] = useState("");
    // const [confirmEmail, setConfirmEmail] = useState("");
    // const [userName, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setlastName] = useState("");
    // // const [cookie, setCookie] = useCookies(["token"]);
    // const navigate = useNavigate();
    
    // const signUp = async ()=> {
    //     if(email !== confirmEmail){
    //         alert(
    //             "Email and confirm email fields must match. Please check your email again"
    //         );
    //         return;
    //     }
    //     const data ={email, password, userName, firstName, lastName};
    //     const response = await makeUnauthenticatedPOSTRequest(
    //         "/auth/register",
    //          data
    //         );
    //     if(response && !response.err){
    //         // const token = response.token;
    //         const date = new Date();
    //         date.setDate(date.getDate() + 30);
    //         // setCookie("token", token, {path: "/", expires: date});
    //         alert("Success");
    //         navigate("/home");
    //     } else {
    //         alert("Failure");
    //     }
    // };


    return(
        <div className="w-full h-full flex flex-col items-center">
            <div className='logo p-5 border-b border-solid border-gray-300 w-full flex justify-center'>
                <Icon icon="logos:spotify" width ="150"/>
            </div>
            <div className='inputRegion w-1/3 py-10 flex items-center justify-center flex-col'>
            <div className='font-bold mb-4 text-2xl'>
                Sign Up for free to start Listening.
            </div>
            <TextInput 
            label="Email address" 
            placeholder="Enter your email"   
            className="my-6"
            // value={email}
            // setValue={setEmail}
            />
             <TextInput 
            label="Confirm Email address" 
            placeholder="Enter your email again"   
            className="mb-6"
            // value={confirmEmail}
            // setValue={setConfirmEmail}
            />

            <TextInput 
            label="User Name" 
            placeholder="Enter your username"   
            className="mb-6"
            // value={userName}
            // setValue={setUsername}
            />

            <PasswordInput label="Create Password"
             placeholder="Enter a strong password here"
            //  value={password}
            // setValue={setPassword}
             />
            <div className='w-full flex justify-between items-center space-x-8'>
            <TextInput 
            label="First Name" 
            placeholder="Enter your First Name"   
            className="my-6"
            // value={firstName}
            // setValue={setFirstName}
            />
             <TextInput 
            label="Last Name" 
            placeholder="Enter your Last name"   
            className="my-6"
            // value={lastName}
            // setValue={setlastName}
            />
            </div>
            <div className=' w-full flex items-center justify-center my-8'>
            <button className="bg-green-400 font-semibold p-3 px-10 rounded-full"
            // onClick={e=> {
            //     e.preventDefault();
            //     signUp();    
            //     }}
                >
                Sign Up
            </button>
            </div>
            <div className="w-full border border-solid border-gray-300"></div>
            <div className=' font-semibold text-lg'>
             Already have an account?
            </div>
            <div className=" w-full flex items-center justify-center text-green-500 font-bold">
                <Link to="/login"> Log In Instead</Link>
               
            </div>
        </div>
        </div>
    );
};

export default SignupComponent;
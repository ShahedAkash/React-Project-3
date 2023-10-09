import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const {createUser, googleSignin} = useContext(AuthContext);
    const [error, setError] = useState('');

    const handelGoogle = ()=>{
        googleSignin()
        .then(res=> console.log(res.user))
    }

    const handelSingUp = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        if(!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)){
            // setError("Minimum Six character one upperCase and special character ")
            toast.error('Minimum Six character one upperCase and special character', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        // creating a User
        createUser(email,password)
        .then(res=>{
            console.log(res.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div className="hero min-h-screen">
            

            <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <ToastContainer></ToastContainer>
                <form onSubmit={handelSingUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-pink-400 text-white font-semibold">Login</button>
                    </div>
                    
                    <p className="text-xs">Already have an Account? <Link className="text-lg font-bold text-pink-400" to={"/logIn"}>Login</Link></p>
                </form>
                <button onClick={handelGoogle} className="btn">google Login</button>
            </div>
            
        </div>
    );
};

export default SignUp;
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {

    const {logIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handelLogin = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        

        logIn(email, password)
        .then(res =>{
            console.log(res.user);
            navigate(location?.state ? location.state : "/")
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div className="hero min-h-screen -mt-20">
            
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
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
                        <p className="text-xs">Do not have an Account? <Link className="text-lg font-bold text-pink-400" to={"/signup"}>Sign Up</Link></p>
                    </form>
                </div>
            
        </div>
    );
};

export default Login;
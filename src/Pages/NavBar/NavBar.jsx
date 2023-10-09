import { useContext } from "react";
import { Link, NavLink} from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const handelSingOut = () => {
        logOut()
    }

    const Links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "btn-link text-red-500 font-bold " : "bg-none hover:bg-none hover:text-red-500"}>Home</NavLink></li>
        <li><NavLink to="/aboutUs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "btn-link text-red-500 font-bold " : "bg-none hover:bg-none hover:text-red-500"}>About Us</NavLink></li>
        {/* <li>{user.displayName}</li> */}
    </>

    return (
        <div className="navbar bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <a className=" w-[200px]"><img src="https://i.ibb.co/sqR60FH/rs-w-400-cg-true-m.png" alt="" /></a>
            </div>
            {/* <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1 space-x-10">
                    {Links}
                </ul>
            </div> */}
            <div className="navbar-end space-x-10 font-semibold">
                <ul className=" menu-horizontal px-1 space-x-10 hidden lg:flex">
                    {Links}
                </ul>
                {
                    user ?
                        <button onClick={handelSingOut} className="bg-transparent border-none">Sign out</button>
                        :
                        <Link to={"/logIn"} className="bg-transparent border-non">Log In</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../footer/Footer";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
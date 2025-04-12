import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-4">
                        <NavLink
                            to="/"
                            className=
                            "hover:text-yellow-300"

                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/category"
                            className=
                            "hover:text-yellow-300"

                        >
                            Category
                        </NavLink>
                        <NavLink
                            to="/cart"
                            className=
                            "hover:text-yellow-300"

                        >
                            Cart
                        </NavLink>
                        <NavLink
                            to="/login"
                            className=
                            "hover:text-yellow-300"

                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/signup"
                            className=
                            "hover:text-yellow-300"

                        >
                            SignUp
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

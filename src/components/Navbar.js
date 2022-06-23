import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

import logo from "../assets/images/logo/logo.png";

const Navbar = () => {
	let location = useLocation();

	return (
		<nav>
			<Link to="/cards">
				<div className="logo">
					<img src={logo} alt="Logo" />
				</div>
			</Link>
			<ul>
				<li>
					<Link to="/saved" className={location.pathname === "/saved" ? "active" : ""}>
						Saved
					</Link>
				</li>
				<li>
					<Link to="/delete" className={location.pathname === "/delete" ? "active" : ""}>
						Delete
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

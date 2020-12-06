import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<h2>foozies</h2>
			<ul>
				<li className="icon">
					<i className="material-icons bold">search</i>
				</li>
				<li className="icon">
					<Link to="/">
						<i className="material-icons">home</i>
					</Link>
				</li>
				<li className="icon">
					<Link to="/cart">
						<i className="material-icons">shopping_bag</i>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

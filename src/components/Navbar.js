import React from "react";

const Navbar = () => {
	return (
		<nav>
			<h2>foozies</h2>
			<ul>
				<li className="icon">
					<i className="material-icons bold">search</i>
				</li>
				<li className="icon">
					<a href="/home">
						<i className="material-icons">home</i>
					</a>
				</li>
				<li className="icon">
					<a href="/cart">
						<i className="material-icons">shopping_bag</i>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

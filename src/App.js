import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Route path="/home" component={Home} />
				<Route path="/cart" component={Cart} />
			</div>
		</BrowserRouter>
	);
}

export default App;

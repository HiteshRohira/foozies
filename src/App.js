import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Modal from "./components/Modal";

function App() {
	const [selectedImage, setSelectedImage] = useState(null);

	return (
		<div className="App">
			<Navbar />
			<ProductGrid setSelectedImage={setSelectedImage} />
			{selectedImage && (
				<Modal
					selectedImage={selectedImage}
					setSelectedImage={setSelectedImage}
				/>
			)}
		</div>
	);
}

export default App;

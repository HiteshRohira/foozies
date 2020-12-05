import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import Modal from "./Modal";

const Home = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	return (
		<div>
			<ProductGrid setSelectedImage={setSelectedImage} />
			{selectedImage && (
				<Modal
					selectedImage={selectedImage}
					setSelectedImage={setSelectedImage}
				/>
			)}
		</div>
	);
};

export default Home;

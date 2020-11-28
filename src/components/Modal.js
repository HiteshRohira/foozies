import React from "react";

const Modal = ({ selectedImage, setSelectedImage }) => {
	const handleClick = (e) => {
		if (e.target.classList.contains("backdrop")) {
			setSelectedImage(null);
		}
	};

	const { id, name, url } = selectedImage;
	console.log(id);

	return (
		<div className="backdrop" onClick={handleClick}>
			<div className="product-modal">
				<img src={url} alt={name} />
				<h2>{name}</h2>
			</div>
		</div>
	);
};

export default Modal;

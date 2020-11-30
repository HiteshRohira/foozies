import React from "react";

const Modal = ({ selectedImage, setSelectedImage }) => {
	const handleClick = (e) => {
		if (e.target.classList.contains("backdrop")) {
			setSelectedImage(null);
		}
	};

	const { id, name, price, url } = selectedImage;
	console.log(id);

	return (
		<div className="backdrop" onClick={handleClick}>
			<div className="product-modal">
				<img src={url} alt={name} />
				<h2>{name}</h2>
				<p>₹ {price}.00</p>
				<button>Add to cart</button>
			</div>
		</div>
	);
};

export default Modal;

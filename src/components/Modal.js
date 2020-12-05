import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImage, setSelectedImage }) => {
	const handleClick = (e) => {
		if (e.target.classList.contains("backdrop")) {
			setSelectedImage(null);
		}
	};

	const { id, name, price, url } = selectedImage;
	console.log(id);

	return (
		<motion.div
			className="backdrop"
			onClick={handleClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}>
			<motion.div
				className="product-modal"
				initial={{ y: "25vh" }}
				animate={{ y: 0 }}
				transition={{ delay: 0.1 }}>
				<img src={url} alt={name} />
				<h2>{name}</h2>
				<p>₹ {price}.00</p>
				<motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
					Add to cart
				</motion.button>
			</motion.div>
		</motion.div>
	);
};

export default Modal;

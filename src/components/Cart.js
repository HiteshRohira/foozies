import React from "react";
import { motion } from "framer-motion";

const Cart = () => {
	return (
		<div id="cart">
			<motion.img
				id="cart-img"
				src="./images/empty-cart.png"
				alt="Empty Cart"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
			/>
			<motion.h2
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4 }}>
				Your cart items appear here.
			</motion.h2>
		</div>
	);
};

export default Cart;

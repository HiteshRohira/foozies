import React from "react";
import { motion } from "framer-motion";

const ProductGrid = ({ setSelectedImage }) => {
	const images = [
		{
			id: 1,
			name: "Red and Black Hoodie",
			price: 250,
			url: "./images/hoodies/red-and-black-hoodie.jpg",
		},
		{
			id: 2,
			name: "White Hoodie",
			price: 200,
			url: "./images/hoodies/white-hoodie.jpg",
		},
		{
			id: 3,
			name: "Black Jacket",
			price: 300,
			url: "./images/jackets/black-jacket.jpg",
		},
		{
			id: 4,
			name: "Black Jacket with Shirt",
			price: 400,
			url: "./images/jackets/black-jacket-with-shirt.jpg",
		},
		{
			id: 5,
			name: "Dark Blue Check Shirt",
			price: 150,
			url: "./images/shirts/dark-blue-check-shirt.jpg",
		},
		{
			id: 6,
			name: "Light Blue Check Shirt",
			price: 125,
			url: "./images/shirts/light-blue-check-shirt.jpg",
		},
		{
			id: 7,
			name: "Red Check Shirt",
			price: 150,
			url: "./images/shirts/red-check-shirt.jpg",
		},
		{
			id: 8,
			name: "Blue Shoes",
			price: 150,
			url: "./images/shoes/blue-shoes.jpg",
		},
		{
			id: 9,
			name: "Green Shoes",
			price: 150,
			url: "./images/shoes/green-shoes.jpg",
		},
		{
			id: 10,
			name: "White Shoes",
			price: 150,
			url: "./images/shoes/white-shoes.jpg",
		},
		{
			id: 11,
			name: "Yellow Shoes",
			price: 150,
			url: "./images/shoes/yellow-shoes.jpg",
		},
	];

	return (
		<div className="product-grid">
			{images.map((image) => (
				<div
					className="product-element"
					key={image.id}
					onClick={() => setSelectedImage(image)}>
					<motion.img
						src={image.url}
						alt={image.name}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
					/>
				</div>
			))}
		</div>
	);
};

export default ProductGrid;

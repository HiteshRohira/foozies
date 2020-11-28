import React from "react";
import ProductElement from "./ProductElement";

const ProductGrid = () => {
	const images = [
		{
			id: 1,
			name: "red-and-black-hoodie",
			url: "./images/hoodies/red-and-black-hoodie.jpg",
		},
		{
			id: 2,
			name: "white-hoodie",
			url: "./images/hoodies/white-hoodie.jpg",
		},
		{
			id: 3,
			name: "black-jacket",
			url: "./images/jackets/black-jacket.jpg",
		},
		{
			id: 4,
			name: "black-jacket-with-shirt",
			url: "./images/jackets/black-jacket-with-shirt.jpg",
		},
		{
			id: 5,
			name: "dark-blue-check-shirt",
			url: "./images/shirts/dark-blue-check-shirt.jpg",
		},
		{
			id: 6,
			name: "light-blue-check-shirt",
			url: "./images/shirts/light-blue-check-shirt.jpg",
		},
		{
			id: 7,
			name: "red-check-shirt",
			url: "./images/shirts/red-check-shirt.jpg",
		},
		{
			id: 8,
			name: "blue-shoes",
			url: "./images/shoes/blue-shoes.jpg",
		},
		{
			id: 9,
			name: "green-shoes",
			url: "./images/shoes/green-shoes.jpg",
		},
		{
			id: 10,
			name: "white-shoes",
			url: "./images/shoes/white-shoes.jpg",
		},
		{
			id: 11,
			name: "yellow-shoes",
			url: "./images/shoes/yellow-shoes.jpg",
		},
	];

	return (
		<div className="product-grid">
			{images.map((image) => (
				<ProductElement image={image} key={image.id} />
			))}
		</div>
	);
};

export default ProductGrid;

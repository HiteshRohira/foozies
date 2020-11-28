import React from "react";

const ProductGrid = ({ setSelectedImage }) => {
	const images = [
		{
			id: 1,
			name: "Red and Black Hoodie",
			url: "./images/hoodies/red-and-black-hoodie.jpg",
		},
		{
			id: 2,
			name: "White Hoodie",
			url: "./images/hoodies/white-hoodie.jpg",
		},
		{
			id: 3,
			name: "Black Jacket",
			url: "./images/jackets/black-jacket.jpg",
		},
		{
			id: 4,
			name: "Black Jacket with Shirt",
			url: "./images/jackets/black-jacket-with-shirt.jpg",
		},
		{
			id: 5,
			name: "Dark Blue Check Shirt",
			url: "./images/shirts/dark-blue-check-shirt.jpg",
		},
		{
			id: 6,
			name: "Light Blue Check Shirt",
			url: "./images/shirts/light-blue-check-shirt.jpg",
		},
		{
			id: 7,
			name: "Red Check Shirt",
			url: "./images/shirts/red-check-shirt.jpg",
		},
		{
			id: 8,
			name: "Blue Shoes",
			url: "./images/shoes/blue-shoes.jpg",
		},
		{
			id: 9,
			name: "Green Shoes",
			url: "./images/shoes/green-shoes.jpg",
		},
		{
			id: 10,
			name: "White Shoes",
			url: "./images/shoes/white-shoes.jpg",
		},
		{
			id: 11,
			name: "Yellow Shoes",
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
					<img src={image.url} alt={image.name} />
				</div>
			))}
		</div>
	);
};

export default ProductGrid;

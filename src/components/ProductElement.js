import React from "react";

const ProductElement = ({ image }) => {
	return (
		<div>
			<img src={image.url} alt={image.name} />
		</div>
	);
};

export default ProductElement;

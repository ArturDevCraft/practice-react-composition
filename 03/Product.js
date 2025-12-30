import React from 'react';

function Product({ isCategory, isCart, data, handleClick }) {
	const { id, name, price } = data;
	return (
		<li>
			<h3>{name}</h3>
			<span>{price}</span>
			<span> PLN</span>
			{isCategory && (
				<button onClick={() => handleClick(id)} disabled={isCart}>
					Dodaj do koszyka
				</button>
			)}
			{isCart && !isCategory && (
				<button onClick={() => handleClick(id)}>Usuń z koszyka</button>
			)}
		</li>
	);
}

export default Product;

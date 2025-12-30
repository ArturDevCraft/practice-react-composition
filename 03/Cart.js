import React from 'react';

function Cart({ children }) {
	return (
		<section>
			<h2>Cart</h2>
			<ul>{children}</ul>
		</section>
	);
}

export default Cart;

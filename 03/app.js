import React from 'react';
import { createRoot } from 'react-dom/client';

import View from './View';
import Product from './Product';
import data from './data.json';

class App extends React.Component {
	state = {
		cart: [],
	};

	addToCart = (id) => {
		this.setState((state) => {
			return { cart: [id, ...state.cart] };
		});
	};

	removeFromCart = (id) => {
		this.setState((state) => {
			return { cart: state.cart.filter((item) => item !== id) };
		});
	};

	prepareList({ type = 'category' }) {
		const { cart } = this.state;

		return data.map((item) => {
			const isCart = cart.includes(item.id);
			if (!(type == 'cart' && !isCart)) {
				return (
					<Product
						key={item.id}
						isCategory={type == 'category' ? true : false}
						isCart={isCart}
						data={item}
						handleClick={
							type == 'category' ? this.addToCart : this.removeFromCart
						}
					/>
				);
			}
		});
	}

	render() {
		return (
			<section>
				<View title="Category">{this.prepareList({ type: 'category' })}</View>
				<View title="Cart">{this.prepareList({ type: 'cart' })}</View>
			</section>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);

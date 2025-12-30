import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';
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
			if (type == 'category') {
				return (
					<Product
						key={item.id}
						isCategory={true}
						isCart={isCart}
						data={item}
						handleClick={this.addToCart}
					/>
				);
			}
			if (type === 'cart' && isCart) {
				return (
					<Product
						key={item.id}
						isCategory={false}
						isCart={isCart}
						data={item}
						handleClick={this.removeFromCart}
					/>
				);
			}
		});
	}

	render() {
		return (
			<section>
				<Category>{this.prepareList({ type: 'category' })}</Category>
				<Cart>{this.prepareList({ type: 'cart' })}</Cart>
			</section>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);

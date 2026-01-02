import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
	state = {
		text: '',
	};
	textComponentRef = React.createRef();
	getSnapshotBeforeUpdate(prevProps, prevState) {
		const offsetHeight = this.textComponentRef.current.offsetHeight;
		const scrollHeight = this.textComponentRef.current.scrollHeight;
		if (offsetHeight > scrollHeight || offsetHeight > 100) {
			return { resize: false };
		}

		return { resize: true };
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (snapshot.resize === true) {
			const currentHeight = this.textComponentRef.current.offsetHeight;
			this.textComponentRef.current.style.height = currentHeight + 10 + 'px';
		}
	}
	changeHandler = (e) => {
		this.setState({ text: e.target.value });
	};

	render() {
		const { text } = this.state;
		return (
			<Textarea
				content={text}
				ref={this.textComponentRef}
				changeHandler={this.changeHandler}
			/>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);

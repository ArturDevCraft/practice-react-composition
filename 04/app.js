import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';

class App extends React.Component {
	state = {
		filesList: [],
	};

	updateFileList = (e) => {
		const files = e.target.files;
		console.log(files);
		for (const file of files) {
			const reader = new FileReader();
			let fileContent;
			reader.onload = () => {
				fileContent = reader.result;
				this.setState((state) => {
					return {
						filesList: [
							{ name: file.name, size: file.size, content: fileContent },
							...state.filesList,
						],
					};
				});
			};
			reader.onerror = () => {
				alert('Error');
			};
			reader.readAsText(file);
		}
	};

	render() {
		const { filesList } = this.state;
		return (
			<section>
				<File changeHandler={this.updateFileList} />
				<List files={filesList} />
			</section>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);

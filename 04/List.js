import React from 'react';

class List extends React.Component {
	render() {
		const { files } = this.props;
		return (
			<ul>
				{files.map((file) => (
					<li key={Math.random()}>
						<h3>
							{file.name} - {file.size / 1024} KB
						</h3>
						<p>{file.content}</p>
					</li>
				))}
			</ul>
		);
	}
}

export default List;

import React from 'react';

class TableRow extends React.Component {
	render() {
		const { fields } = this.props;
		return (
			<tr>
				{fields.map((field) => (
					<td key={field + Math.random()}>{field}</td>
				))}
			</tr>
		);
	}
}

export default TableRow;

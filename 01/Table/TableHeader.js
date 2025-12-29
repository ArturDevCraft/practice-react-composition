import React from 'react';

class TableHeader extends React.Component {
	render() {
		const { fields } = this.props;
		return (
			<thead>
				<tr>
					{fields.map((field) => (
						<th key={field + Math.random()}>{field}</th>
					))}
				</tr>
			</thead>
		);
	}
}

export default TableHeader;

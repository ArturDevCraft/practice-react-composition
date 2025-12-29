import React from 'react';
import TableRow from './TableRow';

class TableBody extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<tbody>
				{data.map((row) => (
					<TableRow
						key={row.id}
						fields={[
							row.id,
							row.name,
							row.price,
							row.quantity,
							row.quantity * row.price,
						]}
					/>
				))}
			</tbody>
		);
	}
}

export default TableBody;

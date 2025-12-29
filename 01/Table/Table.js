import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

class Table extends React.Component {
	render() {
		const { data } = this.props;
		const total = data.reduce(
			(acc, curr) => acc + curr.price * curr.quantity,
			0
		);
		return (
			<table>
				<TableHeader fields={['id', 'name', 'price', 'quantity', 'value']} />
				<TableBody data={data} />
				<TableFooter fields={['Total', total]} colspan={[3, 2]} />
			</table>
		);
	}
}

export default Table;

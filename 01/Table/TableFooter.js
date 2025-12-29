import React from 'react';

class TableFooter extends React.Component {
	render() {
		const { fields, colspan } = this.props;
		return (
			<tfoot>
				<tr>
					{fields.map((field, index) => (
						<td key={field} colSpan={colspan[index]}>
							{field}
						</td>
					))}
				</tr>
			</tfoot>
		);
	}
}

export default TableFooter;

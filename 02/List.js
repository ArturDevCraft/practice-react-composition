import React from 'react';

import ListItem from './ListItem';

function List(props) {
	const { items } = props;
	return (
		<ul>
			{items.map((item) => (
				<ListItem item={item} />
			))}
		</ul>
	);
}

export default List;

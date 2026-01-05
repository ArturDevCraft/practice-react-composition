import React from 'react';

function View({ title, children }) {
	return (
		<section>
			<h2>{title}</h2>
			<ul>{children}</ul>
		</section>
	);
}

export default View;

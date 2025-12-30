import React from 'react';

function Category({ children }) {
	return (
		<section>
			<h2>Category</h2>
			<ul>{children}</ul>
		</section>
	);
}

export default Category;

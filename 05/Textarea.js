import React from 'react';

const Textarea = React.forwardRef((props, ref) => {
	const { content, changeHandler } = props;
	return (
		<textarea ref={ref} onChange={changeHandler} value={content}></textarea>
	);
});

export default Textarea;

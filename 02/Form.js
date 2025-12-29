import React from 'react';

class Form extends React.Component {
	name = React.createRef();
	render() {
		const { submitHandler } = this.props;

		return (
			<section>
				<input ref={this.name} />
				<input
					type="submit"
					onClick={() => submitHandler(this.name.current.value)}
				/>
			</section>
		);
	}
}

export default Form;

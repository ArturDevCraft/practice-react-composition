import React from 'react';

class File extends React.Component {
    render() {
        const {changeHandler} = this.props;
        return <input type="file" multiple onChange={changeHandler} />
    }
}

export default File;
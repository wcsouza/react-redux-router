import React, { Component } from 'react';

class teste4 extends Component {

    render() {
        const { match: { params } } = this.props;
        return (
            <div>
                <p>param: {params.id} </p>
            </div>
        );
    }
}

export default teste4;
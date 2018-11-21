import React, { Component } from 'react';
import PropTypes from 'prop-types';

class teste3 extends Component {
    render() {
        return (
            <div>
                <h1>Teste 3</h1>
                <p>{this.props.testando}</p>
            </div>
        );
    }
}

teste3.defaultProps = {
    testando: 'default'
};

export default teste3;
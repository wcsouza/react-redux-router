import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../store/actions/testeActions';
import Teste3 from './teste3';

class Teste extends Component {
    state = { inputValue: '' };

    handleEvent = event => {
        this.props.AlterarValor(this.state.inputValue);
    };

    onChangeInput = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Teste 2: {this.props.valor}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <input type="text" className="form-control" value={this.state.inputValue} onChange={this.onChangeInput} />
                    </div>
                    <div className="col-sm-3">
                        <button class="btn btn-primary" onClick={this.handleEvent}>Alterar Valor</button>
                    </div>
                </div>
                <div className="row">
                    <p>teste</p>
                    <Teste3 testando="paaaramm" />
                </div>
                <div className="row">
                    <p>teste2</p>
                    <Teste3 />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    valor: state.teste.valor
});

export default connect(mapStateToProps, action)(Teste);
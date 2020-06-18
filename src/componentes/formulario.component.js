import React, { Component } from 'react';
import './formulario.css';

export default class Formulario extends Component {

    state = {
        cliente : {}
    }

    componentDidMount = () => {
        debugger
        if ( this.props.match.params.id !== undefined){
            fetch("http://localhost:8081/cliente/" + this.props.match.params.id )
            .then(res=> res.json())
            .then(res => {
                this.setState({cliente:res[0]});
            })
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.cliente[5]} />
            </div>
        )
    }
}

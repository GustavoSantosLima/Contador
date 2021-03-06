import React, { Component } from 'react'
import { connect } from 'react-redux'
import CounterActions from './../Actions/CounterActions'

class Counter extends Component {
    constructor(props) {
        super(props);

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        this.props.onIncrement()
    }

    handleDecrement() {
        this.props.onDecrement()
    }

    render() {
        const { value } = this.props;

        return (
            <div>
                <h2>Número: { value }</h2>
                <button onClick={ this.handleDecrement }>Decrement</button>
                <button onClick={ this.handleIncrement }>Increment</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (value) => dispatch(CounterActions.onIncrement(value)),
        onDecrement: (value) => dispatch(CounterActions.onDecrement(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
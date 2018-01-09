import React, { Component } from 'react'
import CounterComponent from './../Components/Counter'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>React Redux</h1>
                <CounterComponent />
            </div>
        )
    }
}

export default App
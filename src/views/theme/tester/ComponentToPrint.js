import React, { Component } from 'react'

export default class ComponentToPrint extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
            </div>
        )
    }
}

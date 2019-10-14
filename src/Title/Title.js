import React, { Component } from 'react'
import './Titel.scss';

export class Title extends Component {
    render() {
        return (
            <div className="title">
                <h1>Weather App</h1>
                <h2>Get the weather forecast all over the world</h2>
            </div>
        )
    }
}

export default Title

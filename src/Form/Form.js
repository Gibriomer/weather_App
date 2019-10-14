import React, { Component } from 'react'
import './Form.scss';

export class Form extends Component {
    render() {
        return (
            <div className="container form-wraper">
                <form onSubmit={this.props.getWeather}>
                    <div className="inputs">
                        <input type="text" name="city" placeholder="City"></input>
                        <input type="text" name="country" placeholder="Country"></input>
                    </div>
                        <button className="btn btn-outline-dark">Get weather</button>
                </form>
            </div>
        )
    }
}

export default Form

import ReactDOM from 'react-dom'
import './main.css'
import React, { Component } from 'react'
class App extends Component {
    constructor() {
        super()
        this.state = {
            toggle: false // when false, the image is small
        }
    }
    flipToggle = () => {
        // changes the toggle, which changes the image size
        this.setState({ toggle: !this.state.toggle })
    }
    render = () => {
        let s = {
            height: "100px",
            width: "100px"
        }
        if (this.state.toggle) {
            // if this.state.toggle is true, then use these css styles
            s = {
                height: "300px",
                width: "300px"
            }
        }
        return (<img
            src="/download.jpeg"
            style={s} /* style is an attribute that expects an object. It sets the style of the DOM element */
            onClick={this.flipToggle} />)
    }
}
ReactDOM.render(<App />, document.getElementById("root"))
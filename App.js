import React, { Component } from 'react';
import './App.css';
import KeyPad from "./KeyPad";
import Output from "./Output";

class App extends Component {
    constructor() {
        super();
        this.state = {
            output: " "
        }
        this.onClick = this.onClick.bind(this);
    } 
    onClick (button) {

        if(button === "="){
            this.calculatevalue()
        }

        else if(button === "Reset"){
            this.reset()
        }
        else if(button === "Delete"){
            this.delete()
        }

        else {
            this.setState({
                output: this.state.output + button
            })
        }
    };


    calculatevalue () {
        var res = ''
        if(this.state.output.includes('--')){
            res = this.state.output.replace('--','+')
        }
        else {
            res = this.state.output
        }
        try {
            this.setState({
                output: (eval(res) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                output: "error"
            })
        }
    };

    reset = () => {
        this.setState({
            output: ""
        })
    };

    delete () 
    {
        this.setState({
            output: this.state.output.slice(0,-1)
        })
    };
    render() {
        return (
            <div>
                <div className="calculator">
                    <h1> Calculator App</h1>
                    <Output output={this.state.output} />
                    <KeyPad onClick={this.onClick} />
                </div>
            </div>
        );
    }
}
export default App; 
import React, { Component } from 'react';

class Output extends Component {
    render() {
        let { output } = this.props;
        return (
            <div className="Output">
                <input type="numbers" value={output} id="display" />
            </div>
        );
    }
}


export default Output;
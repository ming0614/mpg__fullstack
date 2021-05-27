import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    shouldComponentUpdate(nextProps,nextState){  //之前的值，和现在的是否改变
        return this.props.son != nextProps.son 
    }
    render() {
        console.log('Child Component render');
        return (
            <div>
                这是Child子组件。
                <p>{this.props.parentInfo[0].name}</p>
            </div>
        )
    }
}

export default Child

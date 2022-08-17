import React, { Component } from 'react'

export default class ErrorHandler extends Component {
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }

componentDidCatch(error, info){
    this.setState ({hasError: true})
    // console.log(error, info)
}

  render() {
    if (this.state.hasError){
        return<h1 style={{ textAlign: 'center'}}>Something went wrong!</h1>
    }
    return<>{this.props.children}</>
}
}
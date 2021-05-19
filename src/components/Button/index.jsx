import { Component } from "react";

export class Button extends Component {

    render() {
        const {text, onclick, disabled}  = this.props;
        return(
            <button cdisabled={disabled} lassName="btn-primary" onClick={onclick}>{this.props.text}</button>
        )
    }
}
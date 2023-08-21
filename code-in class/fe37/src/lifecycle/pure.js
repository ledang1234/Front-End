import React, {  PureComponent } from "react";

export default class Pure extends PureComponent {
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps",nextProps)
    }
    render() {
        console.log("render  - Pure")
        return (
            <div>
                <h3>*Pure component</h3>
            </div>
        )
    }
}
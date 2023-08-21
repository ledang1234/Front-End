import React, { Component } from "react";

export default class FormValidation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                manv: "",
                tennv: "",
                email: "",
            },
            errors: {
                manv: "",
                tennv: "",
                email: "",
            },
            formValid: false,
            manvValid: false,
            tennvValid: false,
            emailValid: false,
        }
    }
    handleOnchange = event => {
        let { name, value } = event.target;
        this.setState({
            value: { ...this.state.value, [name]: value }
        }, () => {
            console.log(this.state)
        })
        // let target = event.target;
        // let name = event.name;
        // let value = target.value;

        // console.log(name, value)
    }

    formValidation = () => {

        let {manvValid, tennvValid, emailValid} = this.state;
        this.setState({
            formValid : manvValid && tennvValid && emailValid
        })
    }
    handleError = event => {
        let { name, value } = event.target;
        let mess = value === "" ? "khong duoc rong" : "";
        let { manvValid, tennvValid, emailValid } = this.state;
        switch (name) {
            case "manv":
                manvValid = mess !== "" ? false : true;
                if ( value!== "" && value.length < 4) {
                    mess = "Lon hon 3 ki tu";
                }
                break;
            case "tennv":
                tennvValid = mess !== "" ? false : true;
                break;
            case "email":
                emailValid = mess !== "" ? false : true;
                if (value !== "" && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ){
                    emailValid = false;
                    mess = "email ko dung dinh dang"
                }
                break;
            default:
                break;
        }

        this.setState({
            errors: { ...this.state.errors, [name]: mess },
            manvValid,
            tennvValid,
            emailValid

        }, 
        () => {
            console.log("abs")
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="title">*FormValidation</h3>
                <form>
                    <div className="form-group">
                        <label>Ma nhan vien</label>
                        <input
                            type="text"
                            className="form-control"
                            name="manv"
                            onChange={this.handleOnchange}
                            onBlur={this.handleError}
                            onKeyUp={this.handleError}
                        />
                        {
                            this.state.errors.manv !== "" ? (
                                <p className="alert alert-danger">{this.state.errors.manv}</p>
                            ) : ("")

                        }

                    </div>
                    <div className="form-group">
                        <label>Ten nhan vien</label>
                        <input
                            type="text"
                            className="form-control"
                            name="tennv"
                            onChange={this.handleOnchange}
                            onBlur={this.handleError}
                            onKeyUp={this.handleError}
                        />
                        {
                            this.state.errors.tennv !== "" ? (
                                <p className="alert alert-danger">{this.state.errors.tennv}</p>
                            ) : ("")

                        }
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={this.handleOnchange}
                            onBlur={this.handleError}
                            onKeyUp={this.handleError}
                        />
                        {
                            this.state.errors.email !== "" ? (
                                <p className="alert alert-danger">{this.state.errors.email}</p>
                            ) : ("")

                        }
                    </div>
                    <button type="submit" className="btn btn-success" disabled={!this.state.formValid}>
                        Submit
              </button>
                </form>
            </div>
        );
    }
}
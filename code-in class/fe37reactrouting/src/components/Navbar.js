import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (

            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                {/* <!-- Brand --> */}
                <a class="navbar-brand" href="#">Navbar</a>

                {/* <!-- Toggler/collapsibe Button --> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/* <!-- Navbar links --> */}
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NavLink exact activeClassName="active" class="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink activeClassName="active" class="nav-link" to="/about">About</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink activeClassName="active" class="nav-link" to="/list-movie">List Movie</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
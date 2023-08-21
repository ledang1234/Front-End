import React, { Component } from "react"


export default class Movie extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={movie.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{moive.tenPhim}</h4>
                    </div>
                </div>
            </div>



        )
    }
}
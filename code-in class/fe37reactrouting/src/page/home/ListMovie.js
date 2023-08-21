import React , { Component } from "react"
import Axios from "axios"
import Movie from "./../../components/Movie"
import {connect} from "react-redux"
import * as action from "./../../redux/action"

 class  ListMovie extends Component {

    componentDidMount() {
        Axios({
            method: "GET",
            url:
            "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung"
        })
        .then(rs => {
           this.props.getListMovie(rs.data);
        })

        .catch(err =>  {
            console.log(err);
        })
    }

    renderHTML = () => {
        return this.props.listMovie.map(items => {
            return <Movie key={items.maPhim} movie={items}/>
        })
    }
    render() {
        return (
            <div>
                 <h3>*ListMovie </h3>
                 <div className="row">{this.renderHTML()}</div>
                 
            </div>
           
        )
    }
}
const mapStateToProps  =   state => {
    return {
        listMovie: state.movieReducer.listMovie
    }
}
const mapDistpatchToProps = dispatch => {
    return {
        getListMovie: (listMovie) => { 
            dispatch(action.actGetListMovie(listMovie))
        }
    }
}

export default connect (mapStateToProps, mapDistpatchToProps) (ListMovie);

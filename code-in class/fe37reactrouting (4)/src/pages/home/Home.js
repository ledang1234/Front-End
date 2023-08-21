import React, { useEffect } from "react";
import Movie from "./../../components/Movie"
import * as action from "./../../redux/action"
import {connect}  from "react-redux"

function Home(props) {

  useEffect(()=>{
    props.getListMovie();
  },[props])

  const renderHTML  = () => {
    return props.listMovie.map(item => {
      return <Movie key={item.maPhim} movie={item}/>
    })
  }
    return (
      <div className="container">
        <div className="row"></div>
        {renderHTML()}
      </div>
    );

}
const mapStateToProps = state  => {
  return {
    listMovie: state.movieReducer.listMovie
  }
}

const mapDispatchToProp  = dispatch => {
  return{
    getListMovie: ()=>{
      dispatch(action.actGetListMovieAPI);
    }
  }
}
export default  connect(mapStateToProps, mapDispatchToProp) (Home);
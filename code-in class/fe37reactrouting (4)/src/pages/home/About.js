import React, { useEffect , useState } from "react";
import Axios from "axios";
import Movie from "./../../components/Movie"


export default function About(){

  const [state, setState ] = useState({listMovie:[]})

  useEffect(()=>{
    Axios  ({
      method: "GET",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    })
    .then (result => {
      setState({
        listMovie: result.data,
      })
    })
    .catch(err =>  {
      console.log(err)
    })
  }, [])

  const renderHTML = () => {
    return state.listMovie.map(item => {
      return <Movie key={item.maPhim}/>
    })
  }
  return (
    <div className="container">
      <h3 className="row">About</h3>
      {renderHTML()}
    </div>
  );

}

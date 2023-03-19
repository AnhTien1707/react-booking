import React, { Component } from 'react'
import "./Home.css";
import HangGhe from "./HangGhe.js";
import DanhsachGheSeclect from './DanhsachGhe';
import Data from "./data/danhSachGhe.json";


export default class Home extends Component {
  renderHangGhe = () =>{
    return Data.map((hangGhe,index) =>{
      return (
        <div key={index}>
           <HangGhe hangGhe = {hangGhe} soHangGhe = {index} />
        </div>
      )
    })

    
  }
  render() {
   
    return (
      <div>
        <div className='background'/>
        <div className='backgroundOverlay'/>
        <div className='container-fluid' style={{
            position:'fixed',
            width:'100%',
            height:'100%',
        }}>
            <div className='row'>
            <div className='col-lg-8'>
            <h3 className='text-center text-warning mt-2'>ĐẶT VÉ XEM PHIM TẠI CYBERLEARN.VN</h3>
            <h5 className='text-center text-light mt-3'>Màn Hình</h5>
            <div className='screen'></div>
            {this.renderHangGhe()}
           
            </div>
            <div className='col-lg-4'>
                <DanhsachGheSeclect/>
            </div>
            </div>
        </div>
      </div>
    )
  }
}

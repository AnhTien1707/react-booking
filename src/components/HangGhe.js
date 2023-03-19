import React, { Component } from 'react'
export default class HangGhe extends Component {
  
renderSoGhe = () =>{
  return this.props.hangGhe.danhSachGhe.map((soGhe,index) =>{
    let CssDaDat = ""
    if(soGhe.daDat){
      CssDaDat = "gheDuocChon";
    }
      return (
        <button key={index} className={`ghe ${CssDaDat}`} style={{
          fontSize: '14px',
          margin : '0px 10px',
          fontWeight : 500,
          
        }}>
          {soGhe.soGhe}
        </button>
     
    )
  })
}
renderSoHangGhe = () =>{
  if(this.props.soHangGhe === 0 ){
    return <div>
{this.props.hangGhe.hang} {this.renderHangGhe()}
    </div>
  }else{
    return <div>
    {this.props.hangGhe.hang} {this.renderSoGhe()}
        </div>
  }
}
renderHangGhe = () =>{
  return this.props.hangGhe.danhSachGhe.map((soGhe,index)=>{
    return <button className='rowNumber' >
      {soGhe.soGhe}
    </button>
  })
}
  render() {
    return (
      <div >
        <div className='text-warning d-flex align-items-center justify-content-center' style={{
          fontSize:'16px',
          margin : '0px 0px 14px 4px',
        }}>
          {this.renderSoHangGhe()}
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DatGheAction} from './redux/actions/BookingActions';
export class HangGhe extends Component {

  renderSoGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((soGhe, index) => {
      let CssDaDat = "";
      let disable = false;
      if (soGhe.daDat) {
        CssDaDat = "gheDuocChon";
        disable = true;
      }
      // Xet Trang Thai Ghe
      let CssDangChon = "";
      let IndexGheSelect = this.props.ListGheSelect.findIndex((gheSelect) => gheSelect.soGhe === soGhe.soGhe)
      if (IndexGheSelect !== -1) {
        CssDangChon = 'gheDangChon'
      }
      return (
        <button onClick={() => {
          this.props.datGhe(soGhe)
        }} key={index} className={`ghe ${CssDaDat} ${CssDangChon}`} disabled ={disable} style={{
          fontSize: '14px',
          margin: '0px 10px',
          fontWeight: 500,

        }}>
          {soGhe.soGhe}
        </button>

      )
    })
  }
  renderSoHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div>
        {this.props.hangGhe.hang} {this.renderHangGhe()}
      </div>
    } else {
      return <div>
        {this.props.hangGhe.hang} {this.renderSoGhe()}
      </div>
    }
  }
  renderHangGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((soGhe, index) => {
      return <button className='rowNumber' >
        {soGhe.soGhe}
      </button>
    })
  }
  render() {
    return (
      <div >
        <div className='text-warning d-flex justify-content-center align-items-center' style={{
          fontSize: '16px',
          margin: '0px 0px 14px 4px',

        }}>
          {this.renderSoHangGhe()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ListGheSelect: state.BookingReducer.ListGheSelect,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(DatGheAction(ghe))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);

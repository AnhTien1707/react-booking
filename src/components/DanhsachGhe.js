import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HuyGheAction , ThanhToanAction} from './redux/actions/BookingActions'

class DanhsachGhe extends Component {
    render() {
        return (
            <div>
                <h4 className='text-light text-center my-4'>DANH SÁCH GHẾ BẠN CHỌN</h4>
                <div className='d-flex align-items-center justify-content'>
                    <button className='gheDuocChon'>
                    </button>
                    <p className='mb-0 text-light mx-2'>Ghế đã đặt</p>
                </div>
                <div className='d-flex align-items-center justify-content my-2'>
                    <button className='gheDangChon'>
                    </button>
                    <p className='mb-0 text-light mx-2'>Ghế đang chọn</p>
                </div>
                <div className='d-flex align-items-center justify-content'>
                    <button className='ghe'>
                    </button>
                    <p className='mb-0 text-light mx-2'>Ghế trống</p>
                </div>
                <table className='table table-bordered my-4 text-light text-center' style={{
                    fontSize: '14px',
                }}>
                    <thead>
                        <tr>
                            <th>Số Ghế</th>
                            <th>Giá</th>
                            <th>Hủy</th>
                        </tr>
                    </thead>
                    <tbody id='tableBody'>
                        {this.props.ListGheSelect.map((ghe, index) => {
                            return (<tr key={index}>
                                <td>{ghe.soGhe}</td>
                                <td>{ghe.gia.toLocaleString()}</td>
                                <td><button onClick={()=>{
                                    this.props.dispatch(HuyGheAction(ghe))
                                }} style={{
                                    backgroundColor : 'red',
                                    color : 'white',
                                    padding : '2px 6px',
                                    border : 'none',
                                    outline : 'none',
                                    borderRadius: '10px',
                                }}>Hủy</button></td>
                            </tr>)
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                        <td>Tổng</td>
                        <td colSpan={2}>
                        {this.props.ListGheSelect.reduce((total,ghe,index) =>{
                            return total += ghe.gia
                           
                        },0).toLocaleString()}
                        
                        </td>
                        </tr>
                    </tfoot>
                </table>
                <button className='btn btn-danger' onClick={() => {
                  this.props.dispatch(ThanhToanAction())
                }}>Thanh Toán</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ListGheSelect: state.BookingReducer.ListGheSelect,
    }
}

export default connect(mapStateToProps)(DanhsachGhe)

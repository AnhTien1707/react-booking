import React, { Component } from 'react'

export default class DanhsachGhe extends Component {
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
                <table className='table table-bordered my-4 text-light'>
                    <thead>
                        <tr>
                            <th>Số Ghế</th>
                            <th>Giá</th>
                            <th>Hủy</th>
                        </tr>
                    </thead>
                    <tbody id='tableBody'>
                        
                    </tbody>
                </table>

            </div>
        )
    }
}

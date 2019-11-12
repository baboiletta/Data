import React, { Component } from 'react';
import Money from './money';
import Dates from './Datepicker';

class Forms extends Component {

    render() {
        return (
            
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-header text-xs-center">
                            Thêm Mới
                         </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label >Tên</label>
                                <input type="text" className="form-control" placeholder="Tên của bạn" />
                            </div>
                            <div className="form-group">
                                <label >Số tiền</label>
                                <Money></Money>
                                
                            </div>
                            <div className="form-group">
                                <label >Ngày</label>
                                <Dates></Dates>
                            </div>
                            <div className="form-group">
                                <label >Hình thức thanh toán</label>
                                <select className="form-control">
                                    <option>Tiền mặt</option>
                                    <option>Chuyển khoản</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label >Chi phí</label>
                                <select className="form-control">
                                    <option>CSKH</option>
                                    <option>NVL</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label >Nội dung</label>
                                <textarea className="form-control"   />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Lưu</button>
                    </div>
                </div>

        );
    }
}

export default Forms;
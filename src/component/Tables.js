import React, { Component } from 'react';

class Tables extends Component {

    render() {
        return (
          
                <div className="col-sm-8">
                    <table className="table table-border table-inverse table-hover bang">
                        <thead className="thead-inverse">
                            <tr>
                                <th>STT</th>
                                <th>Date</th>
                                <th>Tên</th>
                                <th>Sổ Tiền</th>
                                <th>Hình thức TT</th>
                                <th>Chi phí</th>
                                <th>Nội dung</th>
                                <th>Quyền</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>12/11/2019</td>
                                <td>Nguyễn Ngọc Sơn</td>
                                <td>2500000</td>
                                <td>CK</td>
                                <td>CSKH</td>
                                <td>Nội dung</td>
                                <td>
                                    <button type="button" className="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i>  </button>
                                    <button type="button" className="btn btn-info"><i class="fa fa-user" aria-hidden="true"></i>   </button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>12/11/2019</td>
                                <td>Nguyễn Ngọc Sơn</td>
                                <td>2500000</td>
                                <td>CK</td>
                                <td>CSKH</td>
                                <td>Nội dung</td>

                                <td>
                                   <button type="button" className="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i>  </button>
                                    <button type="button" className="btn btn-info"><i class="fa fa-user" aria-hidden="true"></i>   </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>12/11/2019</td>
                                <td>Trần Bảo Ngọc</td>
                                <td>136500</td>
                                <td>CK</td>
                                <td>CSKH</td>
                                <td>Nội dung</td>

                                <td>
                                   <button type="button" className="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i>  </button>
                                    <button type="button" className="btn btn-info"><i class="fa fa-user" aria-hidden="true"></i>   </button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>12/11/2019</td>
                                <td>Huỳnh Thúy Vy</td>
                                <td>1350000</td>
                                <td>CK</td>
                                <td>CSKH</td>
                                <td>Nội dung</td>
                                <td>
                                   <button type="button" className="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i>  </button>
                                    <button type="button" className="btn btn-info"><i class="fa fa-user" aria-hidden="true"></i>   </button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>12/11/2019</td>
                                <td>Huỳnh Thiện Minh</td>
                                <td>500000</td>
                                <td>TM</td>
                                <td>NVL</td>
                                <td>Nội dung</td>
                                <td>
                                    <button type="button" className="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i>  </button>
                                    <button type="button" className="btn btn-info"><i class="fa fa-user" aria-hidden="true"></i>   </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
           
        );
    }
}

export default Tables;
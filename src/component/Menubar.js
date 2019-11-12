import React, { Component } from 'react';

class Mebubar extends Component {

    render() {
        return (
            <div className="row">
                <div className="menubar">
                    {/* <div className="btn-group"> */}
                        <input type="text" placeholder="Tìm kiếm" />
                        <button className="btn-secondary">Search</button>
                        <button className="bnt-primary outline-info"><i className="fa fa-plus" /> Thêm mới</button>
                        <button className="bnt-primary outline-info">  Đóng lại</button>
                    {/* </div> */}
                </div>
            </div>

        );
    }
}

export default Mebubar;
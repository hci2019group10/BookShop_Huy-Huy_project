import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const AdminOrderDetail = () =>{
    return(
        <div id="main-content">
            
                <div className="table-agile-info col-xs-12 col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        CHI TIẾT ĐƠN HÀNG
                        </div>
                        <div>
                            <div className="row w3-res-tb">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-8">
                                    <div className="input-group">
                                        <input type="text" className="input-sm form-control" placeholder="Search"/>
                                        <span className="input-group-btn"><button className="btn btn-sm btn-default"
                                                                            type="button"><i
                                                className="fa fa-search"></i></button></span>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <select className="input-sm form-control w-sm inline v-middle">
                                        <option value="0">Xem tất cả</option>
                                        <option value="1">Hôm nay</option>
                                        <option value="2">Tháng này</option>
                                    </select>
                                </div>
                            </div>
                            <table className="col-xs-12 col-lg-12">
                                <tr>
                                    
                                    <td>Mã đơn hàng</td>
                                    <td>Mã thú cưng</td>
                                    <td>Tên</td>
                                    <td>Số lượng</td>
                                    <td>Đơn giá</td>
                                    <td>Tổng giá</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>3</td>
                                    <td>Poodle vàng mơ 04</td>
                                    <td>1</td>
                                    <td>5.000.000đ</td>
                                    <td>5.000.000đ</td>
                                </tr>
                                <tr>
                                    
                                    <td>1</td>
                                    <td>2</td>
                                    <td>Pug đen huyền 03</td>
                                    <td>1</td>
                                    <td>3.000.000đ</td>
                                    <td>3.000.000đ</td>
                                </tr>
                                <tr>
                                    
                                    <td>1</td>
                                    <td>4</td>
                                    <td>Corgi vàng 01</td>
                                    <td>2</td>
                                    <td>12.000.000đ</td>
                                    <td>24.000.000đ</td>
                                </tr>
                                <tr>
                                    
                                    <td>1</td>
                                    <td>7</td>
                                    <td>Poodle trắng 04</td>
                                    <td>1</td>
                                    <td>6.000.000đ</td>
                                    <td>6.000.000đ</td>
                                </tr>
                                <tr>
                                    
                                    <td>1</td>
                                    <td>10</td>
                                    <td>Pomeranian trắng 04</td>
                                    <td>1</td>
                                    <td>10.000.000đ</td>
                                    <td>10.000.000đ</td>
                                </tr>
                            </table>
                            
                        
                        </div>
                    </div>
                </div>
            
        </div>
    );
};
export default AdminOrderDetail;
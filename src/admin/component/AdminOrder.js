import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import context
import {UserContext} from "../../context/UserContext";
import {OrderContext} from "../../context/OrderContext";
const AdminOrder = ()=>{
    // const [users, setUsers] = useContext(UserContext);
    const [orders, setOrders] = useContext(OrderContext);

    const listOrder = orders.map((order)=>
        <tr>
            <td  className="uneditable center">{order.id}</td>
            <td className="uneditable">aaa</td>
            <td className="uneditable">{order.dateCreated}</td>
            <td className="uneditable center">{order.addressDelivery}</td>
            <td className="uneditable center">{order.totalPrice}</td>
            <td className="center">Kim Đồng</td>
            <td className="uneditable">cccc</td>
            <td><Link to=""><i className="fa fa-eye"></i></Link></td>
            <td className="uneditable"><span>
                <i className="fa fa-times-circle" ></i>
                </span></td>
        </tr>
    );
    return(
        <div id="main-content">
        
            <div className="table-agile-info col-xs-12 col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Đặt hàng
                    </div>
                    <div>
                        <div className="row w3-res-tb">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <div className="input-group">
                                    <input type="text" className="input-sm form-control" placeholder="Search"/>
                                    <span className="input-group-btn"><button className="btn btn-sm btn-default"
                                                                          type="button"><i
                                            className="fa fa-search"></i></button></span>
                                </div>
                            </div>
                            <div className="col-sm-4 m-b-xs">
                                <div className="input-group">
                                    <select className="input-sm form-control w-sm inline v-middle">
                                        <option value="0">--Tất cả--</option>
                                        <option value="1">Hôm nay</option>
                                        <option value="2">Tháng này</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <table className="col-xs-12 col-lg-12" id="editable" className="pure-table pure-table-bordered">
                            <tr>
                                <td title="Mã đơn hàng" className="uneditable">Mã ĐH</td>
                                <td className="uneditable">Khách hàng</td>
                                <td title="Ngày đặt hàng" className="uneditable">Ngày ĐH</td>
                                <td title="Địa chỉ giao hàng" className="uneditable">Địa chỉ GH</td>
                                <td className="uneditable">Tổng giá</td>
                                <td className="uneditable" title="Phương thức thanh toán">Phương thức TT</td>
                                <td>Thanh toán</td>
                                <td title="Trạng thái đơn hàng">Trạng thái ĐH</td>
                                <td className="uneditable">Chi tiết</td>
                                <td className="uneditable">Action</td>
                            </tr>
                            {listOrder}
                        </table>
                        <div className="panel-footer">
                           
                                    <ul className="pagination pagination-sm m-t-none m-b-none">
                                        <li><a href=""><i className="fa fa-chevron-left"></i></a></li>
                                        <li><a href="">1</a></li>
                                        <li><a href="">2</a></li>
                                        <li><a href="">3</a></li>
                                        <li><a href="">4</a></li>
                                        <li><a href=""><i className="fa fa-chevron-right"></i></a></li>
                                    </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
    </div>
    );
};
export default AdminOrder;
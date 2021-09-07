import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
const AdminBar = () => {
  return (
    <div id="sidebar" className="nav-collapse">
      <div className="leftside-navigation">
        <ul className="sidebar-menu" id="nav-accordion">
          <li>
            <Link to="/admin/test">
              <i className="fa fa-home"></i>
              <span>Trang chủ</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/admin/orders">
              <i className="fa fa-shopping-cart"></i>
              <span>Đặt hàng</span>
            </Link>
          </li> */}
          <li>
            <Link to="/admin/products">
              <i className="fa fa-product-hunt"></i>
              <span>Sản phẩm</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/categories">
              <i className="fa fa-tags"></i>
              <span>Thể loại</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/authors">
              <i className="fa fa-users"></i>
              <span>Tác giả</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/admin/publisher">
              <i className="fa fa-tasks"></i>
              <span>Nhà xuất bản</span>
            </Link>
          </li> */}
          {/* <li>
                        <Link to="users.html">
                            <i class="fa fa-users"></i>
                            <span>Người dùng</span>
                        </Link>
                    </li> */}
          {/* <li class="sub-menu">
                        <Link to="javascript:;">
                            <i class="fa fa-backward"></i>
                            <span>Phản hồi</span>
                        </Link>
                        <ul class="sub">
                            <li><Link to="mail.html">Thư</Link></li>
                            <li><Link to="mail_compose.html">Soạn thư</Link></li>
                            <li><Link to="comment.html">Bình luận</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="..\user\index.html">
                            <i class="fa fa-user"></i>
                            <span>Trang User</span>
                        </Link>
                    </li> */}
        </ul>
      </div>
    </div>
  );
};
export default AdminBar;

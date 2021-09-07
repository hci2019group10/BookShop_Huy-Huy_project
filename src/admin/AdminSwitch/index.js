import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
//import component
import AdminBar from "../component/AdminBar";
import AdminHome from "../component/AdminHome";
import AdminTest from "../component/AdminTest";
import AdminProduct from "../component/AdminProduct";
import AdminAddProduct from "../component/AdminAddProduct";
import AdminProductDetail from "../component/AdminProductDetail";
import AdminAuthor from "../component/AdminAuthor";
import AdminAddAuthor from "../component/AdminAddAuthor";
import AdminUpdateAuthor from "../component/AdminUpdateAuthor";
import AdminCategory from "../component/AdminCategory";
import AdminAddCategory from "../component/AdminAddCategory";
import AdminUpdateCategory from "../component/AdminUpdateCategory";
import AdminOrder from "../component/AdminOrder"
// util
import AdminRoute from "../util/AdminRoute";

const AdminSwitch = () => {
  const match = useRouteMatch();
  const style ={
    width : "100%"
  }
  return (
    <div style={style}>
      <AdminBar />
      <Switch>
        <AdminRoute
          path={`${match.url}`}
          exact
          component={AdminHome}
        ></AdminRoute>
        <AdminRoute
          path={`${match.url}/test`} 
          component={AdminTest}
        ></AdminRoute>
        <AdminRoute
          path={`${match.url}/products`} exact
          component={AdminProduct}
        ></AdminRoute>
        <AdminRoute
          path={`${match.url}/products/addProduct`} exact
          component={AdminAddProduct}
        ></AdminRoute>
        <AdminRoute
          path={`${match.url}/products/productDetail/:productID`} exact
          component={AdminProductDetail}
        ></AdminRoute>
        <AdminRoute
          path={`${match.url}/authors`} exact
          component={AdminAuthor}
        ></AdminRoute>
        <AdminRoute
          path={`${match.url}/authors/addAuthor`} exact
          component={AdminAddAuthor}
        ></AdminRoute>
        <AdminRoute
          path={`${match.url}/authors/updateAuthor/:authorID`} exact
          component={AdminUpdateAuthor}
        ></AdminRoute>
        <AdminRoute
          path={`${match.url}/categories`} exact
          component={AdminCategory}
        ></AdminRoute>
        <AdminRoute
          path={`${match.url}/categories/addCategory`} exact
          component={AdminAddCategory}
        ></AdminRoute>
        <AdminRoute
          path={`${match.url}/categories/updateCategory/:categoryID`} exact
          component={AdminUpdateCategory}
        ></AdminRoute>
         <AdminRoute
          path={`${match.url}/orders`} exact
          component={AdminOrder}
        ></AdminRoute>
      </Switch>
    </div>
  );
};

export default AdminSwitch;

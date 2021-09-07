import React from 'react'
import { Route, Switch, useRouteMatch } from "react-router-dom";
//import component
import Menubar from '../component/Menubar'
import User from '../component/User'
import Address from '../component/Address'
import ChangePassword from '../component/ChangePassword'
//import util
import PrivateRoute from '../util/PrivateRoute'
import NotFound from '../util/NotFound'

const UserSwitch = () =>{
    const match = useRouteMatch();
    const style ={
        width : "100%",
        display : "flex"
      }
    return (
        <div style = {style}>
            <Menubar/>
            <Switch>
                <PrivateRoute path={`${match.url}/account/profile`} exact component={User} />
                <PrivateRoute path={`${match.url}/account/address`} exact component={Address} />
                <PrivateRoute path={`${match.url}/account/changePassword`} exact component={ChangePassword} />
            </Switch>
        </div>
    )
}
export default UserSwitch;
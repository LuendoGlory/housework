import React from 'react';
import { Route, Switch } from 'react-router';
import SideBar from '../SideBar'
import Home from '../HomeAdmin'

const Admin = () => {
    return (
        <div className="">
            <SideBar />
            <Switch>
                <Route path="admin/home" component={Home} />
            </Switch>
        </div>
    );
};

export default Admin;
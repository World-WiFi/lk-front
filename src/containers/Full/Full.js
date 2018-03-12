import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../modules/project/Dashboard/';
import Routers from '../../modules/project/Routers/';
import RoutersView from '../../modules/project/RoutersView/';
import UsersManagement from '../../modules/base/Users/Mnagement/UsersList/';
import UsersCreate from '../../modules/base/Users/Mnagement/UsersCreate/';
import RightsManagement from "../../modules/base/Rigths/RightsManagement/";

import ProfileMain from "../../modules/base/Users/Profile/ProfileMain";
import Referals from "../../modules/project/Referals";
import UsersTest from "../../modules/project/UsersTest";

class Full extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>

                <Route path="/routers" name="Routers" component={Routers}/>
                <Route path="/router/view/:id" name="RoutersView" component={RoutersView} />

                <Route path="/right/management" name="RightsManagement" component={RightsManagement} />

                <Route path="/user/management" name="UsersManagement" component={UsersManagement} />
                <Route path="/user/create" name="UsersCreate" component={UsersCreate} />
                <Route path="/user/management/view/:id" name="RoutersView" component={RoutersView} />


                <Route path="/user/profile" name="ProfileMain" component={ProfileMain} />
                <Route path="/referals" name="Referals" component={Referals} />
                <Route path="/users/test" name="UsersTest" component={UsersTest} />

                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;

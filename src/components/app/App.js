import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCheckedAuth, getUser } from '../auth/reducers';
import { tryLoadUser } from '../auth/actions';
import styles from '../_css/App.css';

import Sidebar from './Sidebar';
import Auth from '../auth/Auth';
import PrivateRoute from '../shared/PrivateRoute';
import Dashboard from '../dashboard/Dashboard';
import Search from '../dashboard/Search';
class App extends Component {
  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired
  };

  componentDidMount(){
    this.props.tryLoadUser();
  }

  render() {
    const { checkedAuth, user } = this.props;

    return (
      <Router>
        <div className={styles.app}>
          {checkedAuth &&
          <Fragment>
            <main>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard}/>
                <PrivateRoute exact path="/search" component={Search}/>
                <Route path="/auth" component={Auth}/>
                <Redirect to="/"/>
              </Switch>
            </main>
          </Fragment>
          }
          {user &&
          <Fragment>
            <Sidebar/>
            <footer className={styles.footer}>
                Study Up
            </footer>
          </Fragment>
          }
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    user: getUser(state),
    checkedAuth: getCheckedAuth(state)
  }),
  { tryLoadUser }
)(App);
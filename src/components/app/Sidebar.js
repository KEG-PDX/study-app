import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from '../_css/Sidebar.css';
import PropTypes from 'prop-types';
import { logout } from '../auth/actions';
import { getUser } from '../auth/reducers';
class Sidebar extends Component {

  static propTypes = {
    logout: PropTypes.func,
    user: PropTypes.object,
  };
  
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { user } = this.props;

    return (
      <header className={styles.sidebar}>
        <div className="area">
          <nav className="main-menu">
            <ul>
              <li className="has-subnav">
                <Link to="/me">
                  <i className="fas fa-book fa-2x"></i>
                  <span className="nav-text">
                    Dashboard
                  </span>
                </Link>      
              </li>
              {user &&
            <Fragment>
              <li className="has-subnav">
                <Link to="/">
                  <i className="fas fa-search fa-2x"></i>
                  <span className="nav-text">
                      Search
                  </span>
                </Link>
              </li>
              <li className="has-subnav">
                <Link to="/">
                  <i className="fas fa-chart-bar fa-2x"></i>
                  <span className="nav-text">
                    Insights
                  </span>
                </Link>      
              </li>
              <li onClick={this.handleLogout} className="has-subnav">
                <a>
                  <i className="fas fa-sign-out-alt fa-2x"></i>
                  <span className="nav-text">
                    Logout
                  </span>
                </a>
              </li>
            </Fragment>
              }
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default connect(
  state => ({
    user: getUser(state)
  }),
  { logout }
)(Sidebar);
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import * as actions from '../actions';

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}> Sign Out</button>
      );
    }
    return (
      <button onClick={() => this.props.changeAuth(true)}> Sign In</button>
    );
  }

  renderHeader() {
    return (
      <div>
        <Link to="/"> Home </Link> &emsp;
        <Link to="/post"> Post </Link> &emsp;
        {this.renderButton()}
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.renderHeader() }
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);

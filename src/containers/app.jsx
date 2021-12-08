import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppComponent from '../components/app';
import * as ActionCreators from '../actions/actionCreators';

const mapStateToProps = (state) => {
  return { app: state.app }
}

const mapDispatchToProps = (dispatch) => {
  return {
    runAction: bindActionCreators(ActionCreators.runAction, dispatch)
  }
}

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(AppComponent);

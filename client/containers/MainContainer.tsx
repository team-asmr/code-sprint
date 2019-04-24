import * as MyTypes from "MyTypes";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { SignIn } from "../components/SignIn"

const mapStateToProps = (store: MyTypes.ReducerState) => ({
  name: store.game
  
});
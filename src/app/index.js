import React, { Component } from "react";
import { ThemeProvider } from 'styled-components'
import AppRoutes from "./appRoutes.js"
import SimpleTheme from "../theme/simpleTheme.js"

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../common/reducer/sharedReducer.js";

import {
  Box,
  Heading,
} from 'rebass'

class App extends Component {
  render() {
    const sharedState = this.props.shared;
    return (
      <ThemeProvider theme={SimpleTheme}>
        <Box>
           {/* <LoadingComponent showLoader={sharedState.display.showLoader} />
            <ErrorModal
              showError={sharedState.display.showErrorModal}
              closeErrorModal={this.props.showHideErrorModal}
              error={sharedState.display.error}
            />*/}

            <Heading bg='blue' color="white" m='0' p={[5,5,4]} > Brand </Heading>
            <AppRoutes />
        </Box>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  shared: state.shared
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React, { Component, Suspense } from "react";
import { BrowserRouter , Route, Link } from "react-router-dom";
import { replaceReducerFunc } from "../store.js";
import { connect } from "react-redux";

import { Box } from 'rebass';
import ErrorBoundary from './errorBoundary.js';
import Loading from '../common/components/loading';
import CustomError from '../common/components/error';

// Add new Routes
const Home = React.lazy(() => import('../routes/home'));
const Reviews = React.lazy(() => import('../routes/reviews'));

class AppRoutes extends Component {
  render() {
  // TODO : Fix infinite state update then use
  // onEnter={replaceReducerFunc(window.location.pathname)}
  const state = this.props.shared;
    return (
          <Box p={[5, 5, 4]} >
          {state.display.showLoader &&  <Loading/> }
          {state.display.showErrorModal &&  <CustomError error={state.display.error}/>}
            <BrowserRouter  onEnter={console.log(window.location.pathname)} >
              <ErrorBoundary>
                <Suspense fallback={<Loading/>}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/reviews" component={Reviews} />
                </Suspense>
              </ErrorBoundary>
            </BrowserRouter >
          </Box>
    );
  }
}

const mapStateToProps = state => ({
  shared : state.shared
});

export default connect(
  mapStateToProps,
  null
)(AppRoutes);


import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./reviews-reducer.js";
import {
  Link, Text, Box
} from 'rebass'

// Selectors
//import getMemorizedReviews from "./reviews-selector.js"

class Reviews extends React.Component {

componentDidMount(){
  this.props.fetchReviews();
}

  render() {
  const state = this.props.reviews;
     return (
     <div>
         <Link href='/'>HOME </Link>
         <Box>
             <Text pt={4} fontSize={3} > Reviews </Text>
             <hr/>
             {
                state.reviews.length == 0 ?
                "No Comments" :
                state.reviews.map( review => <Text pt={1}> {review.comment} </Text> )
             }
         </Box>
     </div>
     );
   }

}


const mapStateToProps = state => ({
  reviews: state.reviews
});


/*
TODO : Fix this code block to enable Reselect
const getMapStateToProps = () => {
 const memorizedReviews = getMemorizedReviews()
 const mapStateToProps = (state, props) => {
   return {
      reviews : memorizedReviews(state.reviews, props)
   }
  }
 return mapStateToProps
}
*/


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...actions
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);

import { createSelector } from 'reselect'

// Selectors
const getReviews  = (reviews, props) => reviews.find( review => review.comment == props.comment );

const getMemorizedReviews = () => createSelector(
  [ getReviews ] ,
  (review) => ({ review })
)

export default getMemorizedReviews;
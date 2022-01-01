import { connect } from "react-redux";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import CollectionsOverview from "../collections-overview/collections-overview.component";
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = (state) => ({
  isLoading: selectIsCollectionFetching(state),
});

// Container Pattern
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);
// Processed from right to left

export default CollectionsOverviewContainer;

// compose is used for more readable code of wrapped components
// const CollectionsOverviewContainer = connect(mapStateToProps)(withSpinner(CollectionsOverview));

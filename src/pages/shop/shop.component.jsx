import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionPage from "../collection/collection.component";
import CollectionsOverviewContainer from "../../components/collections-overview/collection-overview.container";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // componentDidMount fires only after render method is fully executed
  // so for the spinner to run before data loading completion
  // isLoading should be true
  componentDidMount() {
    // fetching data from firestore on Component Load
    this.props.fetchCollectionsStartAsync();
    // Observable Pattern with firebase
    // In this pattern, when ever data on firestore updates, it will push data
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     this.props.updateCollections(collectionsMap);
    //     this.setState({
    //       ...this.state,
    //       loading: false,
    //     });
    //   }
    // );
    // Promise pattern
    // In this pattern, data comes only when componentDidMount executes
    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   this.props.updateCollections(collectionsMap);
    //   this.setState({
    //     ...this.state,
    //     loading: false,
    //   });
    // });
    // using fetch and web api call style
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-db-74906/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     // convert the data into the format we need
    //     // set the state
    //   });
  }
  render() {
    const { isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        {/* For CollectionOverview we used Container pattern to move all its dependencies
        to seperate component instead of polluting parent component,
        this patter is called Container Pattern */}
        <Route
          exact
          path={`${this.props.match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${this.props.match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isCollectionLoaded: selectIsCollectionLoaded(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

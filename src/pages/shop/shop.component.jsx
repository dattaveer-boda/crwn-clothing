import React from "react";
import { Route } from "react-router-dom";

import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

function ShopPage(props) {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${props.match.path}`}
        component={CollectionsOverview}
      />
      <Route
        path={`${props.match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
}

export default ShopPage;

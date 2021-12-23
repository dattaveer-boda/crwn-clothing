import React from "react";
import { connect } from "react-redux";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collections-overview.styles.scss";

const CollectionsOverview = (props) => {
  return (
    <div className="collections-overview">
      {props.collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    collections: selectCollectionsForPreview(state),
  };
};

export default connect(mapStateToProps)(CollectionsOverview);

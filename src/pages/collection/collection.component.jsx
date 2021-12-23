import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const CollectionPage = (props) => (
  <div className="collection-page">
    <h2 className="title">{props.collection.title}</h2>
    <div className="items">
      {props.collection.items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

// any component which is direct with Route path, will recieve match, history props from router
const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);

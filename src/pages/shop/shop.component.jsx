import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector, createStructuredSelectors } from "reselect";
import PreviewCollection from "../../components/preview-collection/collection-preview.component.jsx";
import { selectCollections } from "../../redux/shop/shop.selector.js";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);

import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const CollectionPage = ({ match, categoryId }) => {
  console.log(match.params.collectionId);
  return (
    <div className="collection-page">
      <h2>collection PAGE</h2>
    </div>
  );
};

export default CollectionPage;

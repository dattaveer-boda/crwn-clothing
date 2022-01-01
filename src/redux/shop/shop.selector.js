import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShopData = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShopData],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);

export const selectIsCollectionFetching = createSelector(
  [selectShopData],
  (shop) => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShopData],
  (shop) => !!shop.collections // (!!value gives Boolean based truthy or falsy)
);

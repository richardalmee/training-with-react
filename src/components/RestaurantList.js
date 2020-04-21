import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';

const NoRestaurantItems = () => <CollectionItem>(none)</CollectionItem>;

const SomeRestaurantItems = ({ restaurantNames }) =>
  restaurantNames.map((restaurantName) => (
    <CollectionItem key={restaurantName}>{restaurantName}</CollectionItem>
  ));

const RestaurantItems = ({ restaurantNames }) =>
  restaurantNames.length === 0 ? (
    <NoRestaurantItems />
  ) : (
    <SomeRestaurantItems restaurantNames={restaurantNames} />
  );

const RestaurantList = ({ restaurantNames }) => {
  return (
    <Collection data-test='restaurantList' header='Restaurants'>
      <RestaurantItems restaurantNames={restaurantNames} />
    </Collection>
  );
};

export default RestaurantList;

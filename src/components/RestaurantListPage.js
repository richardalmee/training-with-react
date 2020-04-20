import React, { Component } from 'react';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

class RestaurantListPage extends Component {
  state = {
    restaurantNames: [],
    showNewRestaurantForm: false,
  };
  handleAddRestaurant = (newRestaurantName) => {
    this.setState((state) => ({
      restaurantNames: [...state.restaurantNames, newRestaurantName],
      showNewRestaurantForm: false,
    }));
  };
  handleShowNewRestaurantForm = () => {
    this.setState((state) => ({
      showNewRestaurantForm: true,
    }));
  };
  render() {
    const { restaurantNames, showNewRestaurantForm } = this.state;
    return (
      <div>
        <button
          data-test='addRestaurantButton'
          onClick={this.handleShowNewRestaurantForm}
        >
          Add Restaurant
        </button>
        {showNewRestaurantForm ? (
          <NewRestaurantForm onSave={this.handleAddRestaurant} />
        ) : null}
        <RestaurantList restaurantNames={restaurantNames} />
      </div>
    );
  }
}

export default RestaurantListPage;

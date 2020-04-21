import React, { Component } from 'react';
import { Button, Modal } from 'react-materialize';
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
    console.log('handleShowNewRestaurantForm');
    this.setState({
      showNewRestaurantForm: true,
    });
  };
  render() {
    const { restaurantNames } = this.state;
    return (
      <div>
        <Modal
          id='addRestaurantModal'
          header='New Restaurant'
          open={this.state.showNewRestaurantForm}
        >
          <NewRestaurantForm onSave={this.handleAddRestaurant} />
        </Modal>
        <Button
          data-test='addRestaurantButton'
          onClick={this.handleShowNewRestaurantForm}
        >
          Add Restaurant
        </Button>
        <RestaurantList restaurantNames={restaurantNames} />
      </div>
    );
  }
}

export default RestaurantListPage;

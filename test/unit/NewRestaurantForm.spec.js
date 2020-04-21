import React from 'react';
import { shallow } from 'enzyme';
import NewRestaurantForm from '../../src/components/NewRestaurantForm';

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    let saveHandler;
    let wrapper;
    beforeEach(() => {
      saveHandler = jest.fn();
      wrapper = shallow(<NewRestaurantForm onSave={saveHandler} />);
      wrapper
        .find('[data-test="newRestaurantName"]')
        .simulate('change', { target: { value: 'McDonalds' } });

      wrapper.find('[data-test="saveNewRestaurantButton"]').simulate('click');
    });
    it('calls the onSave handler', () => {
      expect(saveHandler).toHaveBeenCalledWith('McDonalds');
    });
    it('clears the text field', () => {
      expect(
        wrapper.find('[data-test="newRestaurantName"]').props().value
      ).toEqual('');
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import NewRestaurantForm from '../../src/components/NewRestaurantForm';

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    it('calls the onSave handler', () => {
      const saveHandler = jest.fn();
      const wrapper = shallow(<NewRestaurantForm onSave={saveHandler} />);

      wrapper
        .find('[data-test="newRestaurantName"]')
        .simulate('change', { target: { value: 'McDonalds' } });

      wrapper.find('[data-test="saveNewRestaurantButton"]').simulate('click');

      expect(saveHandler).toHaveBeenCalledWith('McDonalds');
    });
  });
});

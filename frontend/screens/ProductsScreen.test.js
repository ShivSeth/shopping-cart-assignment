import { render, screen } from '../test-utils';
import ProductsScreen from './ProductsScreen.js';
import userEvent from '@testing-library/user-event';

describe('<ProductsScreen/>', () => {
  test('should Products Add to cart button be present', async () => {
    const { container } = render(<ProductsScreen />);

    const AddToCartButtons = await screen.findAllByRole('button', {
      name: 'Add to cart',
    });
    expect(AddToCartButtons.length).toBe(3);
    expect(container).toMatchSnapshot();
  });
  test('When a product is added product screen display it ', async () => {
    const { container } = render(<ProductsScreen />);
    const addToCartButtons = await screen.findAllByRole('button', {
      name: 'Add to cart',
    });
    userEvent.click(addToCartButtons[0]);
    expect(screen.getAllByText(/1 in cart/).length).toBe(2);
    expect(container).toMatchSnapshot();
  });
});

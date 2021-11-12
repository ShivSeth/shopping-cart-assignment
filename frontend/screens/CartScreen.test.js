import { render, screen } from '../test-utils';
import CartScreen from './CartScreen';

describe('<CartScreen/>', () => {
  test('In empty cart no items and start shopping button should present ', () => {
    const { container } = render(<CartScreen />);
    expect(screen.getByText('No items in your Cart')).toBeInTheDocument();
    expect(
      screen.getByText('Your favorite items are just a click away')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Start Shopping' })
    ).toBeInTheDocument();
  });
});

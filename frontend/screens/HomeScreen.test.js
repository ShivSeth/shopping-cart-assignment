import { render, screen } from '../test-utils';
import HomeScreen from './HomeScreen';
describe('<HomeScreen/>', () => {
  test('Explore buttons should be present', async () => {
    const { container } = render(<HomeScreen />);
    const ExploreButton = await screen.findByRole('button', {
      name: 'Explore Beverages',
    });
    const BakeryButton = await screen.findByRole('button', {
      name: 'Explore Bakery Cakes and Dairy',
    });
    const BeautyButton = await screen.findByRole('button', {
      name: 'Explore Beauty and Hygiene',
    });

    expect(ExploreButton).toBeInTheDocument();
    expect(BeautyButton).toBeInTheDocument();
    expect(BakeryButton).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

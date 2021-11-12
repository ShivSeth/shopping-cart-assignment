import { render, screen } from '../test-utils';
import LoginScreen from './LoginScreen';

describe('<LoginScreen/>', () => {
  test('should sign in input boxes be present ', () => {
    const { container } = render(<LoginScreen />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

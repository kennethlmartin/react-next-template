import { render } from 'test/react-testing-library';

import { Content } from './Content';

it('renders without crashing', () => {
  const { container } = render(<Content />);
  expect(container).toMatchSnapshot();
});

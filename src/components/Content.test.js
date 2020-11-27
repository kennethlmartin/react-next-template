import { render } from 'test/react-testing-library';

import Content from './Content';

it('renders without crashing', () => {
  const { asFragment } = render(<Content />);
  expect(asFragment(<Content />)).toMatchSnapshot();
});

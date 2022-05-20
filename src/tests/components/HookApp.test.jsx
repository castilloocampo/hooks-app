import { render } from '@testing-library/react'
import HooksApp from '../../HooksApp';

describe('HookApp', () => {


  test('should load correctly', () => {
    const {container} = render(<HooksApp />);
    expect(container).toMatchSnapshot();
  });
});

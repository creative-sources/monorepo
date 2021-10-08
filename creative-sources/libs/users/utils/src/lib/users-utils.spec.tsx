import { render } from '@testing-library/react';

import UsersUtils from './users-utils';

describe('UsersUtils', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UsersUtils />);
    expect(baseElement).toBeTruthy();
  });
});

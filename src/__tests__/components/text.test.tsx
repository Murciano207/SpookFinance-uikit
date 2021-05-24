import React from 'react';
import { renderWithTheme } from '../../testHelpers';
import Text from '../../components/Text/Text';

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Text>yogi</Text>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBwQ hHmxhA"
        color="text"
      >
        yogi
      </div>
    </DocumentFragment>
  `);
});

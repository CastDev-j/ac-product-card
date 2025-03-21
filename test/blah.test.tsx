import { Example_4, Example_1, Example_2, Example_3 } from '../.';
import React from 'react';

describe('it', () => {
  it('renders without crashing', () => {
    const { unmount } = render(
      <div>
        <h1>Example_1</h1>
        <Example_1 />
        <h1>Example_2</h1>
        <Example_2 />
        <h1>Example_3</h1>
        <Example_3 />
        <h1>Example_4</h1>
        <Example_4 />
      </div>
    );
    unmount();
  });
});

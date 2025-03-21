import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Example_1, Example_2, Example_3, Example_4 } from '../.';

const App = () => {
  return (
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
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);

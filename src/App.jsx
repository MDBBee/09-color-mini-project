import { useState } from 'react';
import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';

const App = () => {
  const [colors, setColors] = useState(new Values('#a1b404').all(10));

  const handleSetColors = (hex) => {
    // setColors(new Values(hex).all(10));
    console.log(hex);
  };

  return (
    <main>
      <Form handleSetColors={handleSetColors} />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;

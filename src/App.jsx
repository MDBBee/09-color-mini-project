import { useState } from 'react';
import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#a1b404').all(10));

  const handleSetColors = (color) => {
    try {
      const newColor = new Values(color).all(10);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form handleSetColors={handleSetColors} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;

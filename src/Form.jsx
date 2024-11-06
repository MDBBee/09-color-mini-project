import { useState } from 'react';

const handleSubmit = (e) => {
  e.preventDefault();
  //   console.log(color);

  //   handleSetColrs(color);
};

function Form({ handleSetColrs }) {
  const [color, setColor] = useState('');
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#a1b404"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
}
export default Form;

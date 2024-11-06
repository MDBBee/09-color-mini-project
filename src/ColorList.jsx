import SingleColor from './SingleColor';
import { nanoid } from 'nanoid';

function ColorList({ colors }) {
  return (
    <section className="colors">
      {colors.map((c, index) => {
        console.log(c);

        return <SingleColor color={c} key={nanoid()} index={index} />;
      })}
    </section>
  );
}

export default ColorList;

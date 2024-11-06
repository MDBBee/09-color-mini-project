import { toast } from 'react-toastify';

function SingleColor({ index, color }) {
  const { hex, weight } = color;

  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color successfully copied!');
      } catch (error) {
        toast.error("Couldn't copy color to clipboard!");
      }
    } else toast.error("Apparently, clipboard isn't available!!");
  };

  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveToClipBoard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}
export default SingleColor;

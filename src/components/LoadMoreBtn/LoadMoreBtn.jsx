import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick, topic, page }) {

  return (
      <div>
        <button onClick={() => onClick(topic, page + 1)}  className={css.button}>Load more</button>
      </div>
  );
}

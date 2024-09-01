import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: (topic: string, page: number) => void;
  topic: string;
  page: number;
}

export default function LoadMoreBtn({ onClick, topic, page }: LoadMoreBtnProps) {
  return (
    <div>
      <button onClick={() => onClick(topic, page + 1)} className={css.button}>Load more</button>
    </div>
  );
}

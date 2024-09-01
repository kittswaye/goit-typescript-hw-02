import css from './ImageCard.module.css';

export default function ImageCard({ urls, description, openModal }) {

  return (
      <div>
        <img src={urls.small} alt={description} onClick={() => openModal(urls.regular)} className={css.picture} />
      </div>
  );
}

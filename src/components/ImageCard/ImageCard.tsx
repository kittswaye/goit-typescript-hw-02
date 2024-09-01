import css from './ImageCard.module.css';

interface ImageCardProps {
  urls: {
    small: string;
    regular: string;
  };
  description: string;
  openModal: (url: string) => void;
}

export default function ImageCard({ urls, description, openModal }: ImageCardProps) {
  return (
    <div>
      <img src={urls.small} alt={description} onClick={() => openModal(urls.regular)} className={css.picture} />
    </div>
  );
}


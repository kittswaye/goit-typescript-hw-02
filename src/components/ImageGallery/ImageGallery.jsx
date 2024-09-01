import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ images, openModal }) {

  return (
    <div>
      <ul className={css.gallery}>
        {images.map(( img ) => (
          <li key={img.id}>
            <ImageCard urls={img.urls} description={img.description} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
}

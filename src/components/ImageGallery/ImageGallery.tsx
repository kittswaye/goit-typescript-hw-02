import css from "./ImageGallery.module.css";
import ImageCard from '../ImageCard/ImageCard';
import { Image } from "../../App.types";

interface ImageGalleryProps {
  images: Image[];
  openModal: (image: string) => void;
}

export default function ImageGallery({ images, openModal }: ImageGalleryProps) {
  return (
    <div>
      <ul className={css.gallery}>
        {images.map((img) => (
          <li key={img.id}>
            <ImageCard urls={img.urls} description={img.description} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
}


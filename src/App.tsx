import { useState } from 'react';
import { getImagesByTopic } from './images-api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import ImageModal from './components/ImageModal/ImageModal';
import './App.css';
import { Image } from "./App.types";


function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [topic, setTopic] = useState<string>('');
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalPicture, setModalPicture] = useState<string>('');

  const handleSearch = async (searchTopic: string, searchPage: number) => {
    try {
      setTopic(searchTopic);
      setPage(searchPage);
      setError(false);
      setLoading(true);

      const data = await getImagesByTopic(searchTopic, searchPage);

      if (searchPage > 1) {
        setImages(prevImages => [
          ...prevImages,
          ...data.data.results
        ]);
      } else {
        setImages(data.data.results);
      }

    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const openModal = (picture: string) => {
    setIsOpen(true);
    setModalPicture(picture);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error ? (
        <ErrorMessage />
      ) : (
          images.length > 0 && <ImageGallery images={images} openModal={openModal} />
        )
      }
      {loading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={handleSearch} topic={topic} page={page} />}
      <ImageModal isOpen={modalIsOpen} close={closeModal} modalPicture={modalPicture} />
    </>
  )
}

export default App;

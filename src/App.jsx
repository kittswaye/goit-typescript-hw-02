import { useState } from 'react';
import { getImagesByTopic } from './images-api.js';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import Loader from './components/Loader/Loader.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';
import './App.css';

function App() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalPicture, setModalPicture] = useState();


  const handleSearch = async (searchTopic, searchPage) => {
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

  const openModal = (picture) => {
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

export default App

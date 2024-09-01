import css from './ImageModal.module.css';
import Modal from 'react-modal';

interface ImageModalProps {
  isOpen: boolean;
  close: () => void;
  modalPicture: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, close, modalPicture }) => {
  Modal.setAppElement('body');
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      contentLabel="Example Modal"
      className={css.modal}
    >
      <img src={modalPicture} className={css.picture} />
    </Modal>
  );
}

export default ImageModal;


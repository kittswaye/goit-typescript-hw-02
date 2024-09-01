import css from './ImageModal.module.css';
import Modal from 'react-modal';

export default function ImageModal({ isOpen, close, modalPicture }) {
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

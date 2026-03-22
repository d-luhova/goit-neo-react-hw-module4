import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      {image && (
        <img
          className={styles.image}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      )}
    </Modal>
  );
}

export default ImageModal;
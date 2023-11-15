import Modal from 'react-modal';
import { LargeModalImage } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },

  overlay: {
    position: `fixed`,
    top: `0`,
    left: `0`,
    width: `100vw`,
    height: `100vh`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: `rgba(0, 0, 0, 0.8)`,
    zIndex: `1200`,
  },

  modal: {
    maxWidth: `calc(100vw - 48px)`,
    maxHeight: `calc(100vh - 24px)`,
  },
};

Modal.setAppElement('#root');

export const ModalWindow = ({ isOpen, onClose, largeImage, tags }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Modal"
      >
      <div>
        <LargeModalImage src={largeImage} alt={tags} />
      </div>
    </Modal>
  );
};
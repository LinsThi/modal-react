import Modal from "react-modal";
import { IoMdCloseCircle } from "react-icons/io";
import { Container } from "./styles";

interface NewModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewModal({ isOpen, onRequestClose }: NewModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <IoMdCloseCircle size={20} color="#FC4F4F" />
      </button>
      <Container>
        <h2>Sou um modal</h2>

        <input placeholder="Digite algo aqui" />

        <input type="number" placeholder="Digite um valor" />

        <button type="submit">Enviar</button>
      </Container>
    </Modal>
  );
}

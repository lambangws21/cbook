// components/Modal.tsx
import React from 'react';
import Modal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, onRequestClose, contentLabel, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className="Modal border-2 border-white shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-300/20  p-5 rounded-lg w-auto"
      overlayClassName="Overlay flex justify-center items-center border bg-black p-5 rounded-full shadow-md w-30 bg-slate-600"
    >
      <div className='border-2 border-white shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-300/55 w-[470px] h-[330px] -z-10 blur-3xl p-5 rounded-lg w-aut'></div>
      {children}
    </Modal>
  );
};

export default CustomModal;

import React, { useEffect } from 'react';
import s from './Modal.module.css';

const Modal = ({ img, tags, onClose }) => {
  const onImagesClick = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => onImagesClick(e);
    const handleWindowClick = e => handleBackdropClick(e);

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img src={img} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;

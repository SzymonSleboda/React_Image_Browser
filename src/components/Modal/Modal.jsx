import React, { useEffect, useCallback } from 'react';
import s from './Modal.module.css';

const Modal = ({ img, tags, onClose }) => {
  const onImagesClick = useCallback((e) => {
    if (e.code === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const handleBackdropClick = useCallback((e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => onImagesClick(e);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onImagesClick]);

  return (
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img src={img} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;
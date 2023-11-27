import React from 'react';

const Modal = ({ show, onClose, message, type, title, totalKomp, totalUs }) => {
  return (
    <div className={`modal ${show ? 'show' : ''} `}>

    <span className="close" onClick={onClose}>&times;</span>
      <div className={`modal-content ${type}`}>
        <h2 className='title'>{title}</h2>
        <p>{message}</p>
        <div className='total'>
            <p>Cəmi:</p>
            <div className='flex'>Sizin XP: {totalUs}</div>
            <div className='flex'>Düşmən XP: {totalKomp}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

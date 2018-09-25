import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

const ModalWindow = ({ modalId, title, closeModal, children }) => {
  const closeBtnId = 'close'+{modalId};

  return (
  <div className="modal-overlay" id={modalId}>    
    <div className="modal-window">
      <button className="close-modal-btn" name={modalId} onClick={closeModal} id={closeBtnId}>&#10005;</button>  
      {title !== '' && <h2 className="modal-title">{title}</h2> }
      {children}
    </div>
  </div>
  );
};

  ModalWindow.defaultProps ={
    modalId: '',
    title: '',
    closeModal:() => {},
    children: {}
  };

  ModalWindow.propTypes = {
    modalId: PropTypes.string,
    title: PropTypes.string,
    closeModal: PropTypes.func,
    children: PropTypes.node,
  };

export default ModalWindow;
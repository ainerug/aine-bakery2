import React from "react";
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'transparent',
      border: 'none'
    },
  };

export default function RejectModal({modalIsOpen, closeModal, updateStatus}) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-container">
          <div className="white-line-border">
            <h2>Are you sure you want to cancel this order?</h2>
            <div className="modal-buttons-div">
              <button className="modal-button" onClick={()=>updateStatus("canceled")}>
                Yes
              </button>
              <button className="modal-button" onClick={closeModal}>
                No
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
import React from 'react';

const Popup = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        {content}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
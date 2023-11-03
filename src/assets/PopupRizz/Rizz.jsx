import React from 'react';

const Rizz = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="rizz">
      <div className="rizz-content">
        {content}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Rizz;
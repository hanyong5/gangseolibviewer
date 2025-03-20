import React from "react";

function ViewModal({ onClose }) {
  return (
    <>
      <div className="modal drop-shadow-xl">
        test
        <div className="close" onClick={onClose}>
          닫기
        </div>
      </div>
    </>
  );
}

export default ViewModal;

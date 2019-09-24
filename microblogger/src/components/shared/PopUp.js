import React from "react";
import "./PopUp.css";

const PopUp = ({
  cancelButtonTitle,
  confirmButtonTitle,
  handleCancel,
  handleConfirm,
  message,
  showPopUp,
  title
}) => (
  <div className={`modal-contianer ${showPopUp ? "show" : ""}`}>
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {title}
          </h5>
        </div>
        <div className="modal-body">{message}</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-light"
            onClick={handleCancel}>
            {cancelButtonTitle}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleConfirm}>
            {confirmButtonTitle}
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default PopUp;

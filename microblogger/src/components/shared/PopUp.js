import React from "react";

export const PopUp = props => (
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          {props.title}
        </h5>
      </div>
      <div className="modal-body">{props.message}</div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-light"
          onClick={props.handleCancel}>
          {props.cancelButtonTitle}
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={props.handleConfirm}>
          {props.confirmButtonTitle}
        </button>
      </div>
    </div>
  </div>
);

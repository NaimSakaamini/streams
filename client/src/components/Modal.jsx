import React from "react";
//we import reactdom, just like the root file since this is a portal
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui modals dimmer visible active" onClick={props.onDismiss}>
      <div
        className="ui standard modal visible active"
        // this to prevent dismissing the modal on clicking on it
        onClick={e => e.stopPropagation()}
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

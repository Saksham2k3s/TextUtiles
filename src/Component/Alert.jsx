import React from "react";

function Alert(props) {
  return (
    <>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.type}! </strong> {props.alert.msg}
          <button
            type="button"
            className="close closebtn"
            data-bs-dismiss="alert"
            aria-label="Close"
          >
            <i class="fa-solid fa-xmark " aria-hidden="true"></i>
          </button>
        </div>
      )}
    </>
  );
}

export default Alert;

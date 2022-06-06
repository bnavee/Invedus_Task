import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function ModalConfirmation({
  show,
  handleClose,
  title,
  body,
  handleConfirm,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      {body && <Modal.Body>{body}</Modal.Body>}
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          cancel
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

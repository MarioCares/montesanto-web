import { ReactNode } from "react";

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ onClose, children }: ModalProps) {
  return (
    <div className="modal is-active">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">{children}</div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      ></button>
    </div>
  );
}

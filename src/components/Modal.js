import React, {
  useState,
  useEffect,
  forwardRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import { createPortal } from 'react-dom';
import { ModalStyle } from './styles';

const modalElement = document.getElementById('modal-root');

export function Modal({ children }, ref) {
  const [show, setShow] = useState(false);

  const close = useCallback(() => setShow(false), []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setShow(true),
      close,
    }),
    [close]
  );

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('click', handleClose, false);
      document.addEventListener('keydown', handleClose, false);
    }
    return () => {
      document.removeEventListener('click', handleClose, false);
      document.removeEventListener('keydown', handleClose, false);
    };
  }, [show]);

  return createPortal(
    show ? (
      <ModalStyle>
        <div id="modal-content">
          <span
            role="button"
            id="modal-close"
            aria-label="close"
            onClick={() => handleClose}
          >
            x
          </span>
          {children}
        </div>
      </ModalStyle>
    ) : null,
    modalElement
  );
}

export default forwardRef(Modal);

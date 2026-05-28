import { createPortal } from "react-dom"

export default function Modal({ title, content, show, onClose, onConfirm, confirmText = "Conferma" }) {

    if (!show) return null;

    return createPortal(

        <div >
            <h2>{title}</h2>
            {content}
            <div>
                <button onClick={onClose}>annulla</button>
                <button onClick={onConfirm}>{confirmText}</button>
            </div>
        </div>,
        document.body
    )
}
import { ReactElement, useContext } from 'react';
import Modal from './Modal';
import { ModalContext } from './App';

type ModalTriggerProps = {
    text?: string,
    modal: ReactElement<typeof Modal>
};

const ModalTrigger = (props: ModalTriggerProps) => {
    const mContext = useContext(ModalContext);
    
    return (
        <>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => mContext.setVisible(state => !state)}
            >
                {props.text || "OPEN"}
            </button>
            {mContext.visible && props.modal}
        </>
    );
}

export default ModalTrigger;
import { ReactNode, SyntheticEvent, useContext, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from './App';

type ModalProps = {
    title?: string
    children: ReactNode
};

const Modal = (props: ModalProps) => {
    const [visible, setVisible] = useState('translate-y-full');
    const modalRef = useRef(null);
    const mContext = useContext(ModalContext);

    useEffect(() => {
        // To set moving up animation by removing translate-y-full
        setVisible('');
    }, [])

    const onClickBackdrop = () => {
        setVisible('translate-y-full');
        setTimeout(() => {
            mContext.setVisible(false);
        }, 150);
    }

    const handlePropagation = (e: SyntheticEvent) => {
        // To stop any clicks inside the div from propagating to backdrop and causing it to close
        if (e) {
            e.stopPropagation();
        }
    }

    return ReactDOM.createPortal(
        <div
            className={`fixed left-0 right-0 bottom-0 top-0 bg-black/20 z-10 backdrop-blur-sm flex justify-center items-center transition-opacity duration-150 ${visible && 'opacity-0'}`}
            onClick={onClickBackdrop}
        >
            <div
                ref={modalRef}
                className={`absolute md:w-1/2 w-10/12 md:max-h-3/4 max-h-3/5 rounded-3xl bg-white drop-shadow-xl ease-in-out ${visible} transition-transform duration-200 overflow-x-hidden`}
                onClick={handlePropagation}
            >
                <>
                    <div className='absolute right-4 top-4 cursor-pointer' onClick={onClickBackdrop}>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <h1 className={`pl-5 md:pl-8 pt-4 text-2xl md:text-4xl font-bold ${props.title ? 'mb-4' : 'opacity-0'}`}>{props.title || "placeholder"}</h1>
                    <div className='pt-0 px-5 md:px-8'>
                        {props.children}
                    </div>
                </>
            </div>
        </div>,
        document.getElementById("root")!
    );
}

export default Modal;
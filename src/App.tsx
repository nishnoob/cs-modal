import './App.css';
import ModalTrigger from './ModalTrigger';
import Modal from './Modal';
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import CoinSwapperComponent from './CoinSwapper';

export const ModalContext = createContext<{
  visible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>
}>({
  visible: false,
  setVisible: () => {}
});

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  return (
    <ModalContext.Provider value={{ visible: isModalVisible, setVisible: setIsModalVisible }}>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
          <ModalTrigger
            modal={
              <Modal
                title='Coin Swapper'
                children={<CoinSwapperComponent />}
              />
            }
          />
      </div>
    </ModalContext.Provider>
  );
}

export default App;

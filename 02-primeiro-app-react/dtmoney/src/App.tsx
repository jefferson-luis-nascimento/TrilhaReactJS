import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactioModalOpen, setIsNewTransactioModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactioModalOpen(true);
  }

  function handleCloseNewTransactioModal() {
    setIsNewTransactioModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      
      <NewTransactionModal 
        isOpen={isNewTransactioModalOpen} 
        onRequestClose={handleCloseNewTransactioModal} 
      />
      <GlobalStyle />
    </>
  );
}

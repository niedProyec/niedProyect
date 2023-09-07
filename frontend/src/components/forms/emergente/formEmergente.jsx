import { useState, useEffect } from 'react';
import './FormularioEmergente.css';
import Add_user from '../Users/AddUser.jsx';
import CommitCase from '../cases/CommitCase';

const FormularioEmergente = ({ onClose, desForm, ticked, status }) => {
  
  const [isVisible, setIsVisible] = useState(true);
  
  

  useEffect(() => {
    
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isVisible) {
    return null;
  }
  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };
 

    return (
        <div>
            <div className="overlay" onClick={handleClose}></div>
            {desForm === 'tecnico' && <Add_user desForm={desForm} onClose={onClose} handleClose={handleClose}></Add_user>}
            {desForm === 'cliente' && <Add_user desForm={desForm} onClose={onClose} handleClose={handleClose}></Add_user>}
            {desForm === 'commit' && <CommitCase handleClose={handleClose} ticked={ticked} status={status}></CommitCase>}
        </div>
    );
};

export default FormularioEmergente;
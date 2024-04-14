import React, { useState } from 'react';
import PageInfo from '../components/PageInfo';
import Footer from '../components/Footer';
import '../styles/AddItem.css';
import HelpModal from '../components/HelpButton';

function AddItem() {

  const handleClick = () => {
    window.location.reload();
  };

  const [buttonText, setButtonText] = useState('ADD');
  const [btnDisable, setBtnDisable] = useState(false);
  function handleBtnClick() {
    setButtonText('ADDED');
    setBtnDisable(true);
  }

  return (
    <div className='additem'>
      <h1 className='additemtitle'>ADD ITEM</h1>
      <PageInfo className='pageinfo'/>
      <div>
        <button className='addbutton' onClick={handleBtnClick} disabled={btnDisable}>{buttonText}</button>
      </div>
      <div>
        <button type="button" onClick={handleClick} className='addanotheritembutton'>ADD ANOTHER ITEM</button>
      </div>
      <div className='help-button-placement'>
        <HelpModal />
      </div>
      <Footer />
    </div>
  )
}

export default AddItem

import React, { useState } from 'react';
import PageInfo from '../components/PageInfo';
import Footer from '../components/Footer';
import '../styles/AddItem.css';
import HelpModal from '../components/HelpButton';

async function make_api_call() {
  const data = {
    "serial": "925",
    "animal": "cat",
    "pounds": 10,
    "wet": 1,
    "dry": 0,
    "pate": 0,
    "nonpate": 0,
    "quantity": 5,
    "transdate": "5-7-2024"
  };

  const api = "https://yzi5m26nwj.execute-api.us-west-2.amazonaws.com/beta/add-item-and-transaction"

  const res = await fetch(api, {
    method:"POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
});
console.log(res.status);
console.log(res.body)

}

async function make_api_call() {
  const serialno = "101";

  const api = "https://yzi5m26nwj.execute-api.us-west-2.amazonaws.com/beta/get-item-info2?serialno=" + encodeURIComponent(serialno);

  try {
      const res = await fetch(api);

      if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
      }

      const responseData = await res.json();
      console.log(responseData);
  } catch (error) {
      console.error('Error:', error.message);
  }
}

make_api_call();


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

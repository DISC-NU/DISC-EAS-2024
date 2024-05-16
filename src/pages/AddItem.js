import React, { useState } from 'react';
import PageInfo from '../components/PageInfo';
import Footer from '../components/Footer';
import '../styles/AddItem.css';
import HelpModal from '../components/HelpButton';



function AddItem() {

  //Initialize states of form input
  const [serialno, setSerialNo] = useState(0);
  const [animal, setAnimal] = useState("");
  const [pounds, setPounds] = useState(0);
  const [wet, setWet] = useState(0);
  const [dry, setDry] = useState(0);
  const [pate, setPate] = useState(0);
  const [nonpate, setNonPate] = useState(0);
  const [quantity, setQuantity] = useState(0);

  async function make_api_call() {

    //Get current date
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${month}-${day}-${year}`;
  
    console.log(serialno, quantity, pounds, animal, wet, dry, pate, nonpate, currentDate);

    const data = {
      "serial": serialno,
      "animal": animal,
      "pounds": pounds,
      "wet": wet,
      "dry": dry,
      "pate": pate,
      "nonpate": nonpate,
      "quantity": quantity,
      "transdate": currentDate
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
  

  const handleClick = () => {
    window.location.reload();
  };

  const [buttonText, setButtonText] = useState('ADD');
  const [btnDisable, setBtnDisable] = useState(false);
  function handleBtnClick() {
    setButtonText('ADDED');
    setBtnDisable(true);
    make_api_call();
  }

  return (
    <div className='additem'>
      <h1 className='additemtitle'>ADD ITEM</h1>
      <PageInfo className='pageinfo' changeSerial={setSerialNo} changeQuantity={setQuantity} changePounds={setPounds}
        changeAnimal={setAnimal} changeWet={setWet} changeDry={setDry} changePate={setPate} changeNonPate={setNonPate}/>
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

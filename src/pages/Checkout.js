// Page for checking out items and decreasing the amount of that
// corresponding item in inventory.
import React, { useState } from 'react';
import PageInfo from '../components/PageInfo';
import Footer from '../components/Footer';
import '../styles/Checkout.css';
import HelpModal from '../components/HelpButton';

function Checkout()  {

    //Initialize states of form input
    const [serialno, setSerialNo] = useState(0);
    const [animal, setAnimal] = useState("");
    const [pounds, setPounds] = useState(0);
    const [wet, setWet] = useState(0);
    const [dry, setDry] = useState(0);
    const [pate, setPate] = useState(0);
    const [nonpate, setNonPate] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [food, setFood] = useState(0);
    const [hygiene, setHygiene] = useState(0); 
  
    async function make_api_call(){

    //Get current date
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${month}-${day}-${year}`;

    const data = {
      "serial": serialno,
      "animal": animal,
      "pounds": pounds,
      "wet": wet,
      "dry": dry,
      "pate": pate,
      "nonpate": nonpate,
      "quantity": quantity,
      "transdate": currentDate,
      "food": food,
      "hygiene":hygiene,
    };
    console.log(data);
  
    const api = "https://yzi5m26nwj.execute-api.us-west-2.amazonaws.com/beta/add-item-and-transaction"; 

    try{
        const res = await fetch(api, {
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
          });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const responseData = await res.json();
        console.log(responseData);
    }
    catch (error){
        console.error('Error:', error.message);
    }
    
}
    
    const handleClick = () => {
        window.location.reload();
      };
    
      const [buttonText, setButtonText] = useState('CHECK OUT');
      const [btnDisable, setBtnDisable] = useState(false);
      function handleBtnClick() {
        setButtonText('CHECKED OUT');
        setBtnDisable(true);
        make_api_call();
    }
    
    return (
        <div className='checkout'>
            <h1 className='checkouttitle'>CHECK OUT</h1>
            <PageInfo className='pageinfo' changeSerial={setSerialNo} changeQuantity={setQuantity} changePounds={setPounds}
                changeAnimal={setAnimal} changeWet={setWet} changeDry={setDry} changePate={setPate} changeNonPate={setNonPate}
                changeFood={setFood} changeHygiene={setHygiene}/>
            <div>
                <button className='checkoutbutton' onClick={handleBtnClick} disabled={btnDisable}>{buttonText}</button>
            </div>
            <div>
                <button type="button" onClick={handleClick} className='checkoutanotheritembutton'>CHECK OUT ANOTHER ITEM</button>
            </div>
            <div className='help-button-placement'>
                <HelpModal />
            </div>
            <Footer />
        </div>
    )
}

export default Checkout;


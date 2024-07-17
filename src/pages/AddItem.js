import React, { useEffect, useState } from 'react';
import PageInfo from '../components/PageInfo';
import Footer from '../components/Footer';
import '../styles/AddItem.css';

function AddItem() {

  //Initialize states of form input
  const [serialno, setSerialNo] = useState(0);
  const [description, setDescription] = useState("");
  const [animal, setAnimal] = useState("");
  const [pounds, setPounds] = useState(0);
  const [wet, setWet] = useState(0);
  const [dry, setDry] = useState(0);
  const [pate, setPate] = useState(0);
  const [nonpate, setNonPate] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [food, setFood] = useState(0);
  const [hygiene, setHygiene] = useState(0); 

  useEffect(() => {
    const data = {};
    data['serialno'] = serialno;
    
    make_api_get_call(data);
  }, [serialno])

  const [exists, setExists] = useState(0);

  async function make_api_get_call(data){
    const api = 'https://yzi5m26nwj.execute-api.us-west-2.amazonaws.com/beta/lookup';

    const queryString = Object.entries(data)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');

    const url = `${api}?${queryString}`;

    console.log(url)
    let res = await fetch(url, {
        method:"GET"
    });
    console.log(res.status);
    res = await res.json();
    const body = res.body;
    console.log(body);

    if (body) {
      if (Object.keys(body).length > 0) {
        setExists(1);
      } else {
        setExists(0);
      }
    } else {
      setExists(0);
    }
  }

  async function make_api_call() {

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
      "description":description
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

  const [buttonText, setButtonText] = useState('ADD');
  const [btnDisable, setBtnDisable] = useState(false);

  const [warning, setWarning] = useState(false);

  function handleBtnClick() {
    console.log(wet);
    if (!serialno || !quantity){
      setWarning(true);
    } else if ((dry && !pounds) || (animal === 'cat' && hygiene && !pounds)) {
      setWarning(true);
    } else if ((!exists && !animal) ||
               (animal === 'cat' && !food && !hygiene) ||
               (animal === 'dog' && !food && !hygiene) ||
               (animal && food && !wet && !dry) ||
               (animal === 'cat' && food && wet && !pate && !nonpate)) {
      setWarning(true);
    } else {
      setWarning(false);
      setButtonText('ADDED');
      setBtnDisable(true);
      make_api_call();
    }
  }

  return (
    <div className='additem'>
      <h1 className='additemtitle'>ADD ITEM</h1>
      <PageInfo className='pageinfo' exists={exists} changeSerial={setSerialNo} changeQuantity={setQuantity} changePounds={setPounds}
        changeAnimal={setAnimal} changeWet={setWet} changeDry={setDry} changePate={setPate} changeNonPate={setNonPate}
        changeFood={setFood} changeHygiene={setHygiene} changeDesc={setDescription}/>
      <div>
        <button className='addbutton' onClick={handleBtnClick} disabled={btnDisable}>{buttonText}</button>
      </div>
      <div>
        <button type="button" onClick={handleClick} className='addanotheritembutton'>ADD ANOTHER ITEM</button>
      </div>
      {warning && (
                <p className='warning'>Please fill in all available fields.</p>
            )}
      <Footer />
    </div>
  )
}

export default AddItem

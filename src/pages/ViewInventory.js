import React, { useState, useEffect } from 'react';
import ViewingPageInfo from '../components/ViewingPageInfo';
import Footer from '../components/Footer';
import ItemTable from '../components/ItemTable';
import '../styles/ViewInventory.css';


function ViewInventory() {
  // add button disabling later on
  const handleClick = () => {
    window.location.reload();
  };

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

    let total = 0;
    let poundsTotal = 0;
    for (let x in body) {
      total += body[x]['quantity'];

      if (body[x]['category'] === 'PeePads' || body[x]['category'] === 'Wet Food' || body[x]['category'] === 'Pate Food' || body[x]['category'] === 'Nonpate Food') {
        body[x]['pounds'] = null;
      } else {
        poundsTotal += body[x]['pounds'] * body[x]['quantity'];
      }
    }
    setTotal(total);
    setPoundsTotal(poundsTotal);
    
    setInventoryItems(body);
  }
  const [total, setTotal] = useState(null);
  const [pounds, setPounds] = useState(false);
  
  const [poundsTotal, setPoundsTotal] = useState(null);

  //Initialize states of form input
  const [serialno, setSerialNo] = useState(null);
  const [animal, setAnimal] = useState(null);
  const [wet, setWet] = useState(null);
  const [dry, setDry] = useState(null);
  const [pate, setPate] = useState(null);
  const [nonpate, setNonPate] = useState(null);
  const [food, setFood] = useState(null);
  const [hygiene, setHygiene] = useState(null); 

  useEffect(() => {
    const data = {};
    make_api_get_call(data);
  }, [])


  const [inventoryItems, setInventoryItems] = useState([])

  function handleBtnClick() {
    //Clean data to only pass in values of fields that have been filled into get request fields
    const data = {};
    if (serialno){
      data['serialno'] = serialno;
    }
    if (animal){
      data['itemtype'] = animal;
    }
    if (wet){
      data['wet'] = wet;
    }
    if (dry){
      data['dry'] = dry;
    }
    if (pate){
      data['pate'] = pate;
    }
    if (nonpate){
      data['nonpate'] = nonpate;
    }
    if (food){
      data['food'] = food;
    }
    if (hygiene){
      data['hygiene'] = hygiene;
    }

    if((animal && food && dry) || (animal === "cat" && hygiene)) {
      setPounds(true);
    } else {
      setPounds(false);
    }

    console.log(data);
    make_api_get_call(data);
  }

  return (
    <div className='viewinventory'>
      <h1 className='viewinventorytitle'>VIEW INVENTORY</h1>
      <div className='body'>
        <div className='leftside'>
        <div className='h2andclear'>
          <h2 className='viewinventorytitle'>Item Details</h2>
          <div>
            <button className='clearbutton' onClick={handleClick}>CLEAR</button>
          </div>
        </div>
        
        <div className='page-info'>
          <ViewingPageInfo changeSerial={setSerialNo}
          changeAnimal={setAnimal} changeWet={setWet} changeDry={setDry} changePate={setPate} changeNonPate={setNonPate}
          changeFood={setFood} changeHygiene={setHygiene}/>
        </div>
        <div>
          <button className='searchbutton' onClick={handleBtnClick}>SEARCH</button>
        </div>
        </div>
        <div className='item-table-placement'>
          <ItemTable inventory={inventoryItems}/>
        </div>
      </div>
      {pounds && (
        <div className='totalcontainer'>
          <p className='totaltext'>
            Total Quantity
          </p>
          <p className='total'>
            {total}
          </p>

          <p className='poundstext'>
            Total Pounds
          </p>
          <p className='total'>
            {poundsTotal}
          </p>
        </div>
      )}
      {!pounds && (
        <div className='totalcontainer'>
          <p className='totaltext'>
            Total Quantity
          </p>
          <p className='total'>
            {total}
          </p>
        </div>
      )}      
      <Footer />
    </div>
  )
}

export default ViewInventory

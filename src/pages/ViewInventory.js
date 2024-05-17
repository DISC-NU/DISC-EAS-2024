import React, { useState, useEffect } from 'react';
import ViewingPageInfo from '../components/ViewingPageInfo';
import Footer from '../components/Footer';
import ItemTable from '../components/ItemTable';
import HelpModal from '../components/HelpButton';
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
    setInventoryItems(body);
}

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
    console.log(data);
    make_api_get_call(data);
  }

  return (
    <div className='viewinventory'>
      <h1 className='viewinventorytitle'>VIEW INVENTORY</h1>
      <div>
        <div className='page-info'>
        <ViewingPageInfo changeSerial={setSerialNo}
        changeAnimal={setAnimal} changeWet={setWet} changeDry={setDry} changePate={setPate} changeNonPate={setNonPate}
        changeFood={setFood} changeHygiene={setHygiene}/>
        </div>
        <div className='clear-button-placement'>
          <button className='clearbutton' onClick={handleClick}>CLEAR</button>
        </div>
        <div className='item-table-placement'>
          <ItemTable inventory={inventoryItems}/>
        </div>
      </div>
      <div className='search-button-placement'>
        <button className='searchbutton' onClick={handleBtnClick}>SEARCH</button>
      </div>
      <div className='help-button-placement'>
        <HelpModal className='help-button'/>
      </div>
      <Footer />
    </div>
  )
}

export default ViewInventory

import React, { useState } from 'react';
import ViewingPageInfo from '../components/ViewingPageInfo';
import Footer from '../components/Footer';
import ItemTable from '../components/ItemTable';
import HelpModal from '../components/HelpButton';
import '../styles/ViewInventory.css';
// import axios from 'axios';

/* function AddNewItemForm() {
  const [formData, setFormData] = useState({
    serial: '11123',
    animal: cat,
    pounds: 10,
    wet: 1,
    dry: 0,
    pate: 0,
    nonpate: 0
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('/add-new-item-2', formData);
      console.log('Response: ', res.data);
    } catch (error) {
        console.log('Error: ', error.message);
    }
    }
    const handleChange = (event) => {
      const { name, value } = event.target();
      setFormData({...formData, [name]: value });
    }
  } */

function ViewInventory() {
  // add button disabling later on
  const handleClick = () => {
    window.location.reload();
  };

  const [inventoryTable, setInventoryTable] = useState(false);
  function handleBtnClick() {
    setInventoryTable(true);
  }

  return (
    <div className='viewinventory'>
      <h1 className='viewinventorytitle'>VIEW INVENTORY</h1>
      <div>
        <div className='page-info'>
        <ViewingPageInfo/>
        </div>
        <div className='clear-button-placement'>
          <button className='clearbutton' onClick={handleClick}>CLEAR</button>
        </div>
        <div className='item-table-placement'>
          <ItemTable/>
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

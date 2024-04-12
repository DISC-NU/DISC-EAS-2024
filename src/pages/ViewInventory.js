import React, { useState } from 'react';
import ViewingPageInfo from '../components/ViewingPageInfo';
import Footer from '../components/Footer';
import ItemTable from '../components/ItemTable';
import '../styles/ViewInventory.css';

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
      <Footer />
    </div>
  )
}

export default ViewInventory

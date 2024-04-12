import React from 'react';
import ViewingPageInfo from '../components/ViewingPageInfo';
import Footer from '../components/Footer';
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
      <ViewingPageInfo className='pageinfo'/>
        <div>
          <button className='clearbutton' onClick={handleBtnClick}>CLEAR</button>
        </div>
        <div>
          <button className='searchbutton' onClick={handleBtnClick}>SEARCH</button>
        </div>
      <Footer />
    </div>
  )
}

export default ViewInventory

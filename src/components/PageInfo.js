import React, { useEffect, useState } from 'react';
import ItemDetails from './ItemDetails';
import { TextField } from '@mui/material';
import '../styles/PageInfo.css';

function PageInfo({changeSerial, changeQuantity, changePounds, changeAnimal, changeWet, changeDry, changePate, changeNonPate}) {

  const [receivedLitter, setReceivedLitter] = useState(false);

  const handleLitterReceived = (value) => {
    setReceivedLitter(value);
  };

  const [receivedCD, setReceivedCD] = useState(false);

  const handleCatDryReceived = (value) => {
    setReceivedCD(value);
  };

  const [receivedDD, setReceivedDD] = useState(false);

  const handleDogDryReceived = (value) => {
    setReceivedDD(value);
  };

  return (
    <div className='pageinfo'>
      <div className='leftside'>
        <div className='serial'>
            <TextField
                required
                fullWidth
                id="outlined-required"
                label="Serial Number"
                margin='normal'
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => {
                  changeSerial(parseInt(e.target.value));
                }}
            />
        </div>
        <div className='underserial'>
            <TextField
                required
                className='under'
                sx={{ width: '12ch' }}
                id="outlined-number"
                label="Quantity"
                type="number"
                margin='normal'
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => {
                  changeQuantity(parseInt(e.target.value));
                }}
            />
            {
                (receivedLitter || receivedCD || receivedDD) && (
                    <TextField
                        required
                        className='under'
                        id="outlined-number-adornment"
                        label="Pounds"
                        type="number"
                        margin='normal'
                        sx={{ width: '12ch', marginLeft:2 }}
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={(e) => {
                          changePounds(parseInt(e.target.value));
                        }}
                    />
                )
            }
            
        </div>
      </div>
      <ItemDetails receiveLitter={handleLitterReceived} receiveDogFoodDry={handleCatDryReceived} receiveCatFoodDry={handleDogDryReceived} 
      changeAnimal={changeAnimal} changeWet={changeWet} changeDry={changeDry} changePate={changePate} changeNonPate={changeNonPate}/>
    </div>
  )
}

export default PageInfo

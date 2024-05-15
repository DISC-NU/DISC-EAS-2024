import React, { useState } from 'react';
import ItemDetails from './ItemDetails';
import { TextField } from '@mui/material';
import '../styles/PageInfo.css';

function PageInfo({rcfd, rdfd, rcl, cat, dog, cf, df, cl, dp, cdf, ddf, cwf, dwf, cp, cnp}) {
  // const [serialNumber, setSerialNumber] = useState('');
  // const [quantity, setQuantity] = useState('');
  // const [pounds, setPounds] = useState('');
  // const [receivedLitter, setReceivedLitter] = useState(false);

  // const handleLitterReceived = (value) => {
  //   setReceivedLitter(value);
  // };

  // const [receivedCD, setReceivedCD] = useState(false);

  // const handleCatDryReceived = (value) => {
  //   setReceivedCD(value);
  // };

  // const [receivedDD, setReceivedDD] = useState(false);

  // const handleDogDryReceived = (value) => {
  //   setReceivedDD(value);
  // };

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
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
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
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
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
                            shrink: true,
                        }}
                        value={pounds}
                        onChange={(e) => setPounds(e.target.value)}
                    />
                )
            }
            
        </div>
      </div>
      <ItemDetails
      receiveLitter={rcl} receiveDogFoodDry={rdfd} receiveCatFoodDry={rcfd} />
    </div>
  )
}

export default PageInfo

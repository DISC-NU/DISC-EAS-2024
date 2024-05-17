import React, { useState } from 'react';
import ItemDetails from './ItemDetails';
import { TextField } from '@mui/material';
import '../styles/PageInfo.css';
function ViewingPageInfo({changeSerial, changeAnimal, changeWet, changeDry, changePate, changeNonPate, 
    changeFood, changeHygiene}) {
    const [receivedLitter, setReceivedLitter] = useState(false);

    const handleLitterReceived = (value) => {
        setReceivedLitter(false); // since we won't be showing this value regardless
    }

    const [receivedCD, setReceivedCD] = useState(false);

    const handleCatDryReceived = (value) => {
        setReceivedCD(false);
    };

    const [receivedDD, setReceivedDD] = useState(false);

    const handleDogDryReceived = (value) => {
        setReceivedDD(false);
    }

    return (
        <div className= 'pageinfo'>
            <div>
            <ItemDetails receiveLitter={handleLitterReceived} receiveDogFoodDry={handleCatDryReceived} receiveCatFoodDry={handleDogDryReceived} 
            changeAnimal={changeAnimal} changeWet={changeWet} changeDry={changeDry} changePate={changePate} changeNonPate={changeNonPate}
            changeFood={changeFood} changeHygiene={changeHygiene}/>
            <div className='leftside'>
                <div className='serial'>
                    <TextField
                      required
                      fullWidth
                      id="outlined-required"
                      label="Serial Number"
                      margin= 'normal'
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(e) => {
                        changeSerial(parseInt(e.target.value));
                      }}
                    />
                </div>
            </div>
            </div>
        </div>
    )

}

export default ViewingPageInfo

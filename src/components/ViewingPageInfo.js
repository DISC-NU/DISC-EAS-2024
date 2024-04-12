import React, { useState } from 'react';
import ItemDetails from './ItemDetails';
import { TextField } from '@mui/material';
import '..styles/PageInfo.css';
function ViewingPageInfo() {
    return (

        <div className= 'pageinfo'>
            <ItemDetails />
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
                    />
                </div>
            </div>
        </div>
    )

}

export default ViewingPageInfo

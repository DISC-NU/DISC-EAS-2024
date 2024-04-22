import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function HelpModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div>
                <Button onClick={handleOpen}>?</Button>
                <Modal
                className='modal'
                open={open}
                onClose={handleClose}
                aria-labeledby='modal-modal-title'
                aria-describedby='modal-modal-description'

                >
                    <Box>
                        <Typography id='modal-modal-title' variant='h6' component='h2'>
                            Help Page 
                        </Typography>
                        <Typography id='modal-modal-description' sx={{ mt : 2}}>
                            This is where I describe what each different page does.
                        </Typography>
                    </Box>
                </Modal>
            </div>

        </div>
    )
}

export default HelpModal
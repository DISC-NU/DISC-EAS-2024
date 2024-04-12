import React, { useState } from 'react';
import '../styles/ItemTable.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ItemTable() {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='Inventory'>
                    <TableHead>
                        <TableRow>
                            <TableCell> S## </TableCell>
                            <TableCell align='right'> Animal </TableCell>
                            <TableCell align='right'> Type </TableCell>
                            <TableCell align='right'> Food Type </TableCell>
                            <TableCell align='right'> Addn'l Info </TableCell>
                            <TableCell align='right'> Quantity in Stock </TableCell>
                        </TableRow>
                        <TableBody>

                        </TableBody>
                    </TableHead>
                </Table>
             </TableContainer>
        </div>
    );
}

export default ItemTable

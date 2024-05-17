import React, { useState } from 'react';
import '../styles/ItemTable.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ItemTable({inventory}) {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650}} aria-label='Inventory'>
                    <TableHead>
                        <TableRow className='inventory-header'>
                            <TableCell> S## </TableCell>
                            <TableCell align='right'> Animal </TableCell>
                            <TableCell align='right'> Category </TableCell>
                            <TableCell align='right'> Quantity in Stock </TableCell>
                            <TableCell align='right'> Pounds per Item </TableCell>
                            <TableCell align='right'> Total Amount (Pounds) </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {inventory.map( (item) => (
                        <TableRow>
                            <TableCell>{ item["serial_num"] }</TableCell>
                            <TableCell align='right'>{ item["animal"].charAt(0).toUpperCase() + item["animal"].substr(1).toLowerCase() }</TableCell>
                            <TableCell align='right'>{ item["category"] }</TableCell>
                            <TableCell align='right'>{ item["quantity"] }</TableCell>
                            <TableCell align='right'>{ item["pounds"] }</TableCell>
                            <TableCell align='right'>{ item["quantity"] * item["pounds"] }</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
             </TableContainer>
        </div>
    );
}

export default ItemTable

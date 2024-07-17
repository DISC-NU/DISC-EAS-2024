import React from 'react';
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
                            <TableCell align='left'> Animal </TableCell>
                            <TableCell align='left'> Category </TableCell>
                            <TableCell align='left'> Description </TableCell>
                            <TableCell align='left'> Quantity in Stock </TableCell>
                            <TableCell align='left'> Pounds per Item </TableCell>
                            <TableCell align='left'> Total Amount (Pounds) </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {inventory.map( (item) => (
                        <TableRow>
                            <TableCell>{ item["serial_num"] }</TableCell>
                            <TableCell align='left'>{ item["animal"].charAt(0).toUpperCase() + item["animal"].substr(1).toLowerCase() }</TableCell>
                            <TableCell align='left'>{ item["category"] }</TableCell>
                            <TableCell align='left' sx={{ whiteSpace: 'normal', wordWrap: 'break-word', width:'30%' }}>{ item["description"] }</TableCell>
                            <TableCell align='left'>{ item["quantity"] }</TableCell>
                            <TableCell align='left'>{ item["pounds"] }</TableCell>
                            <TableCell align='left'>{ item["pounds"] == null ? null : item["quantity"] * item["pounds"] }</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
             </TableContainer>
        </div>
    );
}

export default ItemTable

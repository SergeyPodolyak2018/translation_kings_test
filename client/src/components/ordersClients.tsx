import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TOrderClients } from '../definitions/main';

export default function OrdersWithClients(props: { data: TOrderClients[] }) {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow>
            <TableCell>Order Name</TableCell>
            <TableCell align='right'>Order Summ</TableCell>
            <TableCell align='right'>Client Name</TableCell>
            <TableCell align='right'>Client Second Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component='th'
                scope='row'
              >
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.summ}</TableCell>
              <TableCell align='right'>{row.client_name}</TableCell>
              <TableCell align='right'>{row.client_second_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

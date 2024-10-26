import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { TClient, TMain, TOrder } from '../definitions/main';

function Row(props: {
  row: TClient;
  orders: TOrder[];
  getOrders: (id: number) => void;
}) {
  const { row, orders } = props;
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      props.getOrders(row.id);
    }
  }, [open]);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell
          component='th'
          scope='row'
        >
          {row.name}
        </TableCell>
        <TableCell align='right'>{row.second_name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse
            in={open}
            timeout='auto'
            unmountOnExit
          >
            <Box sx={{ margin: 1 }}>
              <Typography
                variant='h6'
                gutterBottom
                component='div'
              >
                Orders
              </Typography>
              <Table
                size='small'
                aria-label='purchases'
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Summ</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell
                        component='th'
                        scope='row'
                      >
                        {order.name}
                      </TableCell>
                      <TableCell>{order.summ}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTableClients(props: {
  clients: TClient[];
  orders: TMain['orders'];
  getOrders: (id: number) => void;
}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Client name</TableCell>
            <TableCell align='right'>Second name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.clients.map((row) => (
            <Row
              key={row.id}
              row={row}
              orders={props.orders[row.id] || []}
              getOrders={props.getOrders}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

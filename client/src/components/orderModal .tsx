import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { TMain } from '../definitions/main';
import MenuItem from '@mui/material/MenuItem';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type formres = { name: string; summ: string; client_id: string };

export default function OrderModal(props: {
  open: boolean;
  close: () => void;
  submit: (data: formres) => void;
  clients: TMain['clients'];
}) {
  const handleClose = () => props.close();

  const submitData = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    //@ts-ignore
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
    props.submit(result as never as formres);
  };

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography
          id='modal-modal-title'
          variant='h6'
          component='h2'
        >
          Add orders
        </Typography>
        <Box
          component='form'
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          autoComplete='off'
          onSubmit={submitData}
        >
          <div>
            <TextField
              required
              id='name'
              name='name'
              label='Client name'
              defaultValue=''
            />
            <TextField
              required
              id='summ'
              name='summ'
              label='Summ'
              type='number'
            />
            <TextField
              id='outlined-select-currency'
              select
              label='Select'
              name='client_id'
              helperText='Please select client'
              defaultValue={''}
            >
              {props.clients.map((option) => (
                <MenuItem
                  key={option.id}
                  value={option.id}
                >
                  {option.name + ' ' + option.second_name}
                </MenuItem>
              ))}
            </TextField>
            <Button type='submit'>Add client</Button>
          </div>
        </Box>
      </Box>
    </Modal>
  );
}

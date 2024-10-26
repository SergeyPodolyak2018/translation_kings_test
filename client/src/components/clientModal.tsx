import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormEvent } from 'react';

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
type formres = { name: string; second_name: string };

export default function ClientModal(props: {
  open: boolean;
  close: () => void;
  submit: (data: formres) => void;
}) {
  const handleClose = () => props.close();
  const submitData = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    //@ts-ignore
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
    props.submit(result as formres);
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
          color='black'
        >
          Add client
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
              id='second_name'
              name='second_name'
              label='Client second name'
              defaultValue=''
            />
            <Button type='submit'>Add client</Button>
          </div>
        </Box>
      </Box>
    </Modal>
  );
}

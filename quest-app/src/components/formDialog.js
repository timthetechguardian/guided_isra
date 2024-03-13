import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") 
        return;
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button 
        style={{
            backgroundColor:"transparent",
            borderColor:"transparent",
            cursor:'pointer',
            margin:'0',
            padding:'0'
        }} 
        onClick={handleClickOpen}
      >
        <AccountCircleIcon sx={{ fontSize: 50 }}/>
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const fullname = formJson.fullname;
            const email = formJson.email;
            const position = formJson.position;
            const department = formJson.department;
            console.log(fullname);
            console.log(email);
            console.log(position);
            console.log(department);
            handleClose();
          },
        }}
      >
        <DialogTitle>Profile Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To enter your profile, please fill out the missing fields.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="fullname"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="name"
            name="position"
            label="Position"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="name"
            name="department"
            label="Department"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button type="submit">Confirm</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

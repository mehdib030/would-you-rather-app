import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ControlledOpenSelect(props) {
  const [user, setUser] = React.useState('');
  const [open, setOpen] = React.useState(false);

  let selectUser = props.selectUser
  let users = props.users

  function handleChange(event) {
    setUser(event.target.value);
    selectUser(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <form autoComplete="off">
      
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="demo-controlled-open-select">User</InputLabel>

        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={user}
          onChange={handleChange}
          inputProps={{
            name: 'user',
            id: 'demo-controlled-open-select',
          }}
          label="User"
        >

          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='sarahedo'>sarahedo</MenuItem>
          <MenuItem value='tylermcginnis'>tylermcginnis</MenuItem>
          <MenuItem value='johndoe'>johndoe</MenuItem> 
        </Select>
      </FormControl>
    </form>
  );
}

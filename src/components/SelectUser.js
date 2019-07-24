import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect(props) {
  const classes = useStyles();
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
      
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">User</InputLabel>

        {/* <SelectField selectedIndex={this.state.deviceIndex}>
            {this.state.devices.map(device =>
            <MenuItem value={device.id} primaryText={device.name}/>
            )}
        </SelectField> */}
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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

//const { question } = this.props

export default function RadioButtonsGroup(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('optionOne');

  let question = props.question

  let selectOption = props.selectOption

  console.log('**** QUESTION ID = ',question) 

  function handleChange(event) {
    setValue(event.target.value);
    selectOption(event.target.value);
  }

  return (
    <div className={classes.root}>
    
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend"></FormLabel>
        <RadioGroup
          aria-label="Question"
          name="question1"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value='optionOne' control={<Radio />} label={question.optionOne.text}/>
          <FormControlLabel value='optionTwo' control={<Radio />} label={question.optionTwo.text} />
         
        </RadioGroup>
      </FormControl>
      
    </div>
  );
}

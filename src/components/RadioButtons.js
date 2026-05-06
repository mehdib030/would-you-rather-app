import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';

function RadioButtonsGroup(props) {

  let question = props.question

  let selectOption = props.selectOption

  let savedOption = props.savedOption

  const [value, setValue] = React.useState(savedOption?savedOption:'optionOne');

  function handleChange(event) {
    setValue(event.target.value);
    selectOption(event.target.value);
  }

  return (
    <div className="radio-buttons-container">
    
      <FormControl component="fieldset" sx={{ m: 3 }}>
        <FormLabel component="legend"></FormLabel>
        <RadioGroup
          aria-label="Question"
          name="question1"
          sx={{ m: (theme) => theme.spacing(1, 0) }}
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

RadioButtonsGroup.propTypes = {
  question: PropTypes.shape({
    optionOne: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
    optionTwo: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  selectOption: PropTypes.func.isRequired,
  savedOption: PropTypes.string,
};

export default RadioButtonsGroup;

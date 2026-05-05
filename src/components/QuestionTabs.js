import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Question from './Question'
import TabPanel from './TabPanel'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function SimpleTabs(props) {

  const { unansweredQuestions,answeredQuestions} = props;

  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper' }}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Unanswered Questions" {...a11yProps(0)} />
          <Tab label="Answered Questions" {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
        <div className='dash-list-1'>
                    {unansweredQuestions.map((id) => (
                        <div key={id}>
                            <Question id={id} isAnswered={false}/>
                        </div>
                    ))}
        </div>      

              
      </TabPanel>
      <TabPanel value={value} index={1} >
        <div className='dash-list'>
                    {answeredQuestions.map((id) => (
                        <div key={id}>
                            <Question id={id} isAnswered={true}/>
                        </div>
                    ))}
        </div>
         
      </TabPanel>
    
    </Box>
  );
}

SimpleTabs.propTypes = {
  unansweredQuestions: PropTypes.array.isRequired,
  answeredQuestions: PropTypes.array.isRequired,
};

export default SimpleTabs;

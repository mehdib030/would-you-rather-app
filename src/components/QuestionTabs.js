import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Question from './Question'

function TabPanel(props) {
  const { children, value, index,...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs(props) {

  const { unansweredQuestions,answeredQuestions} = props;

  SimpleTabs.propTypes = {
    unansweredQuestions: PropTypes.any.isRequired,
    answeredQuestions: PropTypes.any.isRequired,
    
  };

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

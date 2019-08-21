import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {

  const { unansweredQuestions,answeredQuestions} = props;

  SimpleTabs.propTypes = {
    unansweredQuestions: PropTypes.any.isRequired,
    answeredQuestions: PropTypes.any.isRequired,
    
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
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
    
    </div>
  );
}
import logo from './logo.svg';
import React from 'react';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px',
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox',
          }}
        />
      }
      label='Testing Checkbox'
    />
  );
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ButtonStyled />
        <TextField
          variant='outlined'
          color='secondary'
          type='email'
          label='email'
          placeholder='test@test.com'
        />
        <CheckBoxExample />
        <ButtonGroup variant='contained' color='primary'>
          <Button startIcon={<SaveIcon />} size='large'>
            Save
          </Button>
          <Button startIcon={<DeleteIcon />} size='large'>
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  );
}

export default App;

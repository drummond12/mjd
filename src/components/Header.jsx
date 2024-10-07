import * as React from 'react';
import Button from '@mui/material/Button';
import MJD from '../assets/mjd.png';

export default function Header({onTest1Click, onTest2Click, onTest3Click}) {
  return (
    <header className="header">
      <img src={MJD} className="MJD" />
      <Button sx={{
          marginRight: '10px',  
          backgroundColor: '#f1f1f1',
          '&:hover': {
          bgcolor: '#d2cfcf',
          },
        }} 
        variant="text"
        onClick={onTest1Click}
        >
          test1
        </Button>
        <Button sx={{
          marginRight: '10px',  
          backgroundColor: '#f1f1f1',
          '&:hover': {
          bgcolor: '#d2cfcf',
          accentColor: '#d1cfd2'
          },
        }} 
        variant="text"
        onClick={onTest2Click}
        >
          test2</Button>
        <Button sx={{
          marginRight: '10px', 
          backgroundColor: '#f1f1f1',
              '&:hover': {
          bgcolor: '#d2cfcf',
          },
        }} 
        variant="text"
        onClick={onTest3Click}
        >
          test3</Button>
    </header>
  );
}
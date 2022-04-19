import * as React from 'react';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '35ch' },
      }}
      noValidate
      autoComplete="off" 
    >
      <TextField id="filled" label="Search Customer ID" variant="filled" />
    </Box>
  );
}
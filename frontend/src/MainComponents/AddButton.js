import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function AddButton(props) {

  const {to, icon, label}= props
  return (
    <Stack spacing={2} direction="row">
      <Button component={Link} to={to} sx={{background: "black",boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)", borderRadius: "30px", height: "40px", fontFamily:"Quicksand"}} variant="contained">{label}{icon}</Button>
      </Stack>
  );
}
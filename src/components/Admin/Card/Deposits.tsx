import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../Table/Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Nº INSCRITOS</Title>
      <Typography component="p" variant="h4">
        2.000
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        de 15 Setembro, 2022
      </Typography>
      <div>
        <Link sx={{color: "orange"}} href="#" onClick={preventDefault}>
          Ver Estátisticas
        </Link>
      </div>
    </React.Fragment>
  );
}

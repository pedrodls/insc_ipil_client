import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number,
) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '17 Set, 202',
    'Elisio',
    'Luanda, AO',
    'Multicaixa',
    5000,
  ),
  createData(
    1,
    '15 Set, 2022',
    'Bruno',
    'Luanda, AO',
    'Multicaixa',
    5000,
  ),
  createData(2, '18 Set, 2022', 'Pedro', 'Luanda, AO', 'Multicaixa', 5000),
  createData(
    3,
    '18 Set, 2022',
    'Rildo',
    'Lunada, AO',
    'Multicaixa',
    5000,
  ),
  createData(
    4,
    '20 Set, 202',
    'Elisio',
    'California, US',
    'VISA',
    20,
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>SUBMISSÕES RECENTES</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Localidade</TableCell>
            <TableCell>Método de Pagamento</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">${row.amount}US</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Product } from '../../interfaces/entities.tsx';
import {Link} from "react-router-dom";



export default function AllProducts({products}: {products: Product[]}) {
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >Title</TableCell>
            <TableCell >Description</TableCell>
            <TableCell >Price&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/products/${row.id}`}>
                {row.id}
                </Link>
              </TableCell>
              <TableCell >{row.title}
              </TableCell>
              <TableCell >{row.description}</TableCell>
              <TableCell >{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
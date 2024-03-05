import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Product } from '../../interfaces/entities.tsx';
import {Link} from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from "@mui/material/Button";


export default function AllProducts({products, onDelete}: {products: Product[], onDelete(id: number):void}) {

  
  return (
<>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >Title</TableCell>
            <TableCell >Description</TableCell>
            <TableCell >Price&nbsp;($)</TableCell>
            <TableCell ><DeleteForeverIcon/></TableCell>
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
              <TableCell ><Button color="error" onClick={()=> onDelete(row.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </>
  );
}
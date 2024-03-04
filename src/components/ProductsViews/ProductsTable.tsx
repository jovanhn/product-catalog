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
import {useDeleteProduct} from "../../services/ProductService.tsx";
import keycloak from "../../auth/Keycloak.tsx";



export default function AllProducts({products}: {products: Product[]}) {

  const {
    mutate: mutateProduct,
    isSuccess: isSuccessDeleteProduct,
    isError: isErrorDeleteProduct,
    error
  } = useDeleteProduct()

  const handleDelete = (productId: number) => {
    console.log('delete ' + productId)
    mutateProduct(productId)
    if (isSuccessDeleteProduct) {
      console.log('Product deleted!')
    }
  }
  if (keycloak.tokenParsed) {
    console.log('User email:' + keycloak.tokenParsed?.email)
  }
  
  return (
      <> {isErrorDeleteProduct || `${error}` }
        {isSuccessDeleteProduct || 'Product deleted'}

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
              <TableCell ><Button color="error" onClick={()=> handleDelete(row.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </>
  );
}
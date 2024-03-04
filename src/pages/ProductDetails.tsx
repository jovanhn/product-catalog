import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useProductById} from "../services/ProductService.tsx";


function ProductDetails() {
    const {productId} = useParams()
    const navigate = useNavigate()



    const {
        isError,
        isLoading,
        data,
    } = useProductById(Number(productId))
    console.log(data)


    return (
        <>
            {isError && 'Error!'}
            {isLoading && 'Loading...'}
        { !isError && !isLoading &&
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Product Details
            </Typography>
            <Typography variant="h5" component="div">
              {data!.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Detailed description
            </Typography>
            <Typography variant="body2">
                {data!.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => navigate(-1)}>Go Back</Button>
          </CardActions>
        </Card>
}</>
      );
}

export default ProductDetails;
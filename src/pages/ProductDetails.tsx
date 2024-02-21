import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import axiosClient from '../api/Requests';
import { useEffect, useState } from 'react';
import { Product } from '../interfaces/entities';
import { useNavigate } from 'react-router-dom';

function ProductDetails() {
    const {productId} = useParams()
    const navigate = useNavigate()

    const client = axiosClient();
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        client
          .get("/products/"+productId)
          .then((response) => {
            setProduct(response.data);
            console.log(response.data)
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
          });
      }, []);

    return (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Product Details
            </Typography>
            <Typography variant="h5" component="div">
              {product?.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Detailed description
            </Typography>
            <Typography variant="body2">
                {product?.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => navigate(-1)}>Go Back</Button>
          </CardActions>
        </Card>
      );
}

export default ProductDetails;
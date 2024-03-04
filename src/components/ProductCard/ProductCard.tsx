
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Product} from "../../interfaces/entities.tsx";
import {useNavigate} from "react-router-dom";


export default function ProductCard({product}:{product: Product}) {

    const navigate = useNavigate();
    function handleClick(productId: number) {
        navigate(`/products/${productId}`)
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={()=> handleClick(product.id)}>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.imageUrl}
                    alt={product.title}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
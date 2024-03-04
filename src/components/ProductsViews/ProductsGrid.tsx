import Grid from '@mui/material/Unstable_Grid2';
// import ComplexGrid from '../ComplexGrid/ComplexGrid.tsx';

import { Product } from '../../interfaces/entities.tsx';
import ProductCard from "../ProductCard/ProductCard.tsx";

function ProductsGrid({products}: {products: Product[]}) {
    console.log(products)
    return (
        <>
            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                {products.map((product) =>
                    <Grid xs={4} key={product.id}>
                        <ProductCard product={product}/>
                        {/*<ComplexGrid product={product} />*/}
                    </Grid>)}
            </Grid>
        </>
    );
}

export default ProductsGrid;
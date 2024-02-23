import Grid from '@mui/material/Unstable_Grid2';
import ComplexGrid from '../ComplexGrid/ComplexGrid.tsx';

import { Product } from '../../interfaces/entities.tsx';

function AllProductsGrid({products}: {products: Product[]}) {

    return (
        <>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                {products.map((product) =>
                    <Grid xs={6} key={product.id}>
                        <ComplexGrid product={product} />
                    </Grid>)}
            </Grid>
        </>
    );
}

export default AllProductsGrid;
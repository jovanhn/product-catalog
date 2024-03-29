import { useState } from "react";
import ToggleButtons from "../components/ToggleButtons/ToggleButton";
import ProductsGrid from "../components/ProductsViews/ProductsGrid.tsx";
import AllProductsTable from "../components/ProductsViews/ProductsTable.tsx";


import PaginationLink from '../components/Pagination/Pagination';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add';

import {useAllProducts, useDeleteProduct} from "../services/ProductService.tsx";
import {useNavigate} from "react-router-dom";
import {queryClient} from "../main.tsx";

const DEFAULT_PAGE_SIZE: number = 9;

const totalPages = (pageSize: number, totalItems: number) =>{
    return totalItems == 0 ? 1 : Math.ceil(totalItems / pageSize)
}

function Products() {
    const [layout, setLayout] = useState<string | null>('table')
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    const handleNewLayout = (newLayout: string) => {
        setLayout(newLayout);
    }
    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    }

    const handleAddProduct = () => {
        navigate('/products/newProduct')
    }

    const {
        mutate: mutateProduct,
        isSuccess: isSuccessDeleteProduct,
        isError: isErrorDeleteProduct,
        error
    } = useDeleteProduct()


    const handleDelete = (productId: number) => {
        console.log('delete ' + productId)
        mutateProduct(productId)
        console.log('Product deleted!')
        queryClient.refetchQueries({queryKey: ['products', page]});



    }

    const {
        isLoading,
        isError,
        data
    } = useAllProducts(page, DEFAULT_PAGE_SIZE)

    return (
        <>

            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Fab color="primary" aria-label="add" onClick={handleAddProduct}>
                    <AddIcon />
                </Fab>
                <ToggleButtons layout={layout} onLayoutChange={handleNewLayout} />
            </Box>
            {isLoading && 'Loading...'}
            {isError && 'Error!'}
            {!isErrorDeleteProduct && !error && isSuccessDeleteProduct && 'Product deleted'}
                {!isLoading && !isError && <>
            <br />
            {layout == 'table' ? <AllProductsTable onDelete={handleDelete } products={data!.content} /> : <ProductsGrid products={data!.content} />}
            <Box display="flex"
                justifyContent='center'
                sx={{ m: 2 }}>
                <PaginationLink
                    onPageChange={handlePageChange}
                    totalPages={totalPages(DEFAULT_PAGE_SIZE, data!.totalElements)}
                    page={page} />
            </Box>
            </>
}
        </>
    );
}

export default Products;
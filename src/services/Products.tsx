
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {Product, ProductListResponse} from "../interfaces/entities.tsx";


const base_url = 'https://product-backend-wwcv.onrender.com/api/v1'
export const useAllProducts = (page: number, size: number) => {

    const getProducts = async (page= 0): Promise<ProductListResponse> => {
        const response = await
            axios.get<ProductListResponse>(`${base_url}/products?page=${(page-1)}&size=${size}`)
        return response.data
    }

    return useQuery<ProductListResponse>({
        queryKey: ['content','pageable','totalElements', page],
        queryFn: () => getProducts(page)
    })
}

export const searchProducts = async (term: string) => {
    const response = await
        axios.get<Product[]>(`${base_url}/products?title=${term}`)
    return response.data
}

export const getProductsByCategories = async (category: string) => {
    const response = await
        axios.get<Product[]>(`${base_url}/products?category=${category}`)
    return response.data
}
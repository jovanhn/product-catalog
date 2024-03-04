import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const base_url = 'https://product-backend-wwcv.onrender.com/api/v1'


const useAllCategories = () => {

    const getCategories = async (): Promise<string[]> => {
        const response =
            await axios.get<string[]>(`${base_url}/products/categories`)
        return response.data
    }

    return useQuery<string[]>({
        queryKey: ['categories'],
        queryFn: getCategories,
    })
}

export default useAllCategories
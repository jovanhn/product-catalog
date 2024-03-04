/**
 * Represents a basic get response
 */

export interface Product {
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    imageUrl: string
}


export interface ProductListResponse {
    content: Product[],
    pageable: Pageable,
    totalElements: number
}

export interface Pageable {
    pageNumber: number
    pageSize: number
    sort: Sort
    offset: number
    paged: boolean
    unpaged: boolean
}

export interface Sort {
    empty: boolean
    sorted: boolean
    unsorted: boolean
}
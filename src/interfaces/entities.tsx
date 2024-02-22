/**
 * Represents a basic get response
 */
export interface DataResponse {
    data?: any
    status: number
  }

export interface Product {
    id: number,
    title: string,
    description: string,
    price: number,
    images: string[]
}

export interface PageInfo {
    currentPage: number,
    itemsPerPage: number,
    totalItems: number
}
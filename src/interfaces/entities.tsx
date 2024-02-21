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
    price: number
}